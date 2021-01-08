import * as React from "react";

import { Card, LayoutOne, Text, Button } from "upkit";

import { Link } from "react-router-dom";

export default function RegisterSuccess() {
  return (
    <LayoutOne size="small">
      <Card color="white">
        <div className="text-center">
          <Text as="h3">Pendaftaran Berhasil</Text>
          <Text>Silahkan Masuk ke Aplikasi</Text>
        </div>
        <br />
        <Link to="/login">
          <Button fitContainer>Masuk</Button>
        </Link>
      </Card>
    </LayoutOne>
  );
}
