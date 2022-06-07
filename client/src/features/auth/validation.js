var validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export function validate(authData, setErrors, register) {
  if (!authData.email) {
    setErrors({ email: "Email không được bỏ trống" });
    return false;
  }
  if (!authData.password && !register) {
    setErrors({ password: "Mật khẩu không được bỏ trống" });
    return false;
  }
  if (!authData.email.match(validRegex)) {
    console.log("as")
    setErrors({email:"Vui lòng nhập đúng email"});
    return false;
  }
  if (register) {
    if (!authData.password || authData.password.length < 6) {
      setErrors({
        password: "Mật khẩu không được bỏ trống và chứa tối thiểu 6 ký tự",
      });
      return false;
    }

    if (!authData.rePassword) {
      setErrors({ rePassword: "Mật khẩu không được bỏ trống" });
      return false;
    }
    if (authData.password !== authData.rePassword) {
      setErrors({ rePassword: "Mật khẩu không khớp" });
      return false;
    }
  }
  return true;
}
