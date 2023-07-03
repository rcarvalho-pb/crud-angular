import { css } from "src/styles";

const $formulario = css({
  background: "$primary",
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh"
});

const $header = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const $inputs = css({
  display: "flex",
  flexDirection: "column",
});

const $button = css({
  width: "100%"
});

export const cn = {
  formulario: $formulario().className,
  header: $header().className,
  inputs: $inputs().className,
  button: $button().className
}