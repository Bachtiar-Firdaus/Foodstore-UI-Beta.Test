import * as React from "react";
import {
  InputPassword,
  Button,
  FormControl,
  Card,
  LayoutOne,
  InputText,
} from "upkit";
import { useForm } from "react-hook-form";
import { useHistory /*, Redirect*/, Link } from "react-router-dom";

import StoreLogo from "../../components/StoreLogo";
import { useDispatch /*, useSelector */ } from "react-redux";
import { userLogin } from "../../features/Auth/actions";
import { rules } from "./validation";
import { login } from "../../api/auth";

const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

export default function Login() {
  const { register, handleSubmit, errors, setError } = useForm();
  const [status, setStatus] = React.useState(statuslist.idle);
  const dispatch = useDispatch();
  const history = useHistory();

  //fungsi untuk menangani submit form
  const onSubmit = async ({ email, password }) => {
    //set status menjadi prosess
    setStatus(statuslist.process);
    //kirim data ke web api menggunakan helper login
    let { data } = await login(email, password);
    //cek apakah server mengembalikan error
    if (data.error) {
      //tangani error bertipe 'invalidCredential'
      setError("password", {
        type: "invalidCredential",
        message: data.message,
      });
      //set status menjadi error
      setStatus(statuslist.error);
    } else {
      //berhasil login
      //ambil data user dan token dari respon server
      let { user, token } = data;
      //dispatch ke redux store, action 'userLogin dengan data user dan token
      dispatch(userLogin(user, token));
      //redirect ke halaman home
      history.push("/");
    }
    setStatus(statuslist.success);
  };
  return (
    <LayoutOne size="small">
      <br />
      <Card color="white">
        <div className="text-center mb-5">
          <StoreLogo />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl errorMessage={errors.email?.message}>
            <InputText
              placeholder="email"
              fitContainer
              name="email"
              ref={register(rules.email)}
            />
          </FormControl>
          <FormControl errorMessage={errors.password?.message}>
            <InputPassword
              placeholder="password"
              fitContainer
              name="password"
              ref={register(rules.password)}
            />
          </FormControl>
          <Button fitContainer size="large" disabled={status === "process"}>
            Login
          </Button>
          <div className="text-center mt-2">
            Belum Punya Akun ?{" "}
            <Link to="/register">
              <b>Daftar Sekarang</b>
            </Link>
          </div>
        </form>
      </Card>
    </LayoutOne>
  );
}
