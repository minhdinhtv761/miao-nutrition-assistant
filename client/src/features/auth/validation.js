export function validate(authData, setErrors, register) {
  if (!authData.email) {
    setErrors({ email: "Tài khoản không được bỏ trống" });
    return false;
  }
  if (!authData.password && !register) {
    setErrors({ password: "Mật khẩu không được bỏ trống" });
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
