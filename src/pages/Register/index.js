import React from "react";

import { Button, Card, FormControl, InputText, LayoutOne } from "upkit";

import { useForm } from "react-hook-form";

export default function Register() {
  let { register, handleSubmit, errors, setError } = useForm();
  const onSubmit = async (FormData) => {
    //cek data di dalam alert sudah terparsing atau belum
    // alert(JSON.stringify(FormData));
  };
  return (
    <LayoutOne size="small">
      <Card color="white">
        <form on onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <InputText
              name="full_name"
              placeholder="Nama Lengkap"
              fitContainer
              ref={register}
            />
            <InputText
              name="email"
              placeholder="Email"
              fitContainer
              ref={register}
            />
            <InputText
              name="password"
              placeholder="Password"
              fitContainer
              ref={register}
            />
            <InputText
              name="password_confirmation"
              placeholder="Konfirmasi Password"
              fitContainer
              ref={register}
            />
            <Button size="large" fitContainer>
              Mendaftar
            </Button>
          </FormControl>
        </form>
      </Card>
    </LayoutOne>
  );
}
