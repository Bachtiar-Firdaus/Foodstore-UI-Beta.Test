import * as React from "react";

import {
  Button,
  Card,
  FormControl,
  InputPassword,
  InputText,
  LayoutOne,
} from "upkit";

import { useForm } from "react-hook-form";

import { useHistory, Link } from "react-router-dom";

import { rules } from "./validation";

import { registerUser } from "../../api/auth";
// statuslist
const statuslist = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};
export default function Register() {
  let { register, handleSubmit, errors, setError } = useForm();
  //state status dengan nilai default `statuslist.idle`
  let [status, setStatus] = React.useState(statuslist.idle);
  let history = useHistory();

  const onSubmit = async (formData) => {
    //cek data di dalam alert sudah terparsing atau belum
    // alert(JSON.stringify(FormData));

    // dapatkan variabel password dan password_confirmation
    let { password, password_confirmation } = formData;
    // cek password vs password_confirmation
    if (password !== password_confirmation) {
      return setError("password_confirmation", {
        type: "equality",
        message: "Konfirmasi password harus sama dengan password",
      });
    }
    // set status = process
    setStatus(statuslist.process);
    let { data } = await registerUser(formData);
    // cek apakah ada error
    if (data.error) {
      // dapatkan field terkait jika ada errors
      let fields = Object.keys(data.fields);

      fields.forEach((field) => {
        setError(field, {
          type: "server",
          message: data.fields[field]?.properties?.message,
        });
        setStatus(statuslist.error);
        return;
      });
      setStatus(statuslist.success);
      history.pushState("/register/berhasil");
    }
  };
  return (
    <LayoutOne size="small">
      <Card color="white">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl errorMessage={errors.full_name?.message}>
            <InputText
              name="full_name"
              placeholder="Nama Lengkap"
              fitContainer
              ref={register(rules.full_name)}
            />
          </FormControl>
          <FormControl errorMessage={errors.email?.message}>
            <InputText
              name="email"
              placeholder="Email"
              fitContainer
              ref={register(rules.email)}
            />
          </FormControl>
          <FormControl errorMessage={errors.password?.message}>
            <InputPassword
              name="password"
              placeholder="Password"
              fitContainer
              ref={register(rules.password)}
            />
          </FormControl>
          <FormControl errorMessage={errors.password_confirmation?.message}>
            <InputPassword
              name="password_confirmation"
              placeholder="Konfirmasi Password"
              fitContainer
              ref={register(rules.password_confirmation)}
            />
          </FormControl>
          <Button
            size="large"
            fitContainer
            disabled={status === statuslist.process}
          >
            {" "}
            {status === statuslist.process
              ? "Sedang memproses"
              : "Mendaftar"}{" "}
          </Button>
        </form>
        <div className="text-center mt-2">
          Sudah punya akun ?{" "}
          <Link to="/login">
            <b>Masuk Sekarang</b>
          </Link>
        </div>
      </Card>
    </LayoutOne>
  );
}
