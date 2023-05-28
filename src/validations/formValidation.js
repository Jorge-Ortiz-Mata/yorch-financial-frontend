export const loginFormValidation = async (params) => {
  if(params.email.length < 1){
    return { error: true, title: "Email en blanco", message: "El campo 'email' no puede estar en blanco" }
  }

  if(params.password.length < 1){
    return { error: true, title: "Contraseña en blanco", message: "El campo 'contraseña' no puede estar en blanco" }
  }

  if(!params.email.includes("@")) {
    return { error: true, title: "Email invalido", message: "Email debe ser valido. Debe incluir @" }
  }

  if(params.password.length < 6) {
    return { error: true, title: "Contraseña invalida", message: "Contraseña debe contener al menos 6 caracteres" }
  }

  return;
}

export const signUpFormValidation = async (params) => {
  if(params.email.length < 1){
    return { error: true, title: "Email en blanco", message: "El campo 'email' no puede estar en blanco" }
  }

  if(params.password.length < 1){
    return { error: true, title: "Contraseña en blanco", message: "El campo 'contraseña' no puede estar en blanco" }
  }

  if(params.password_confirmation.length < 1){
    return { error: true, title: "Confirmación de contraseña en blanco", message: "El campo 'confirmación de contraseña' no puede estar en blanco" }
  }

  if(!params.email.includes("@")) {
    return { error: true, title: "Email invalido", message: "Email debe ser valido. Debe incluir @" }
  }

  if(params.password.length < 6) {
    return { error: true, title: "Contraseña invalida", message: "Contraseña debe contener al menos 6 caracteres" }
  }

  if(params.password_confirmation.length < 6) {
    return { error: true, title: "Confirmación de contraseña invalida", message: "Confirmación de contraseña debe contener al menos 6 caracteres" }
  }

  if(params.password_confirmation !== params.password) {
    return { error: true, title: "Contraseñas no son iguales", message: "Contraseña y Confirmación de contraseña no son iguales" }
  }

  return;
}

export const profileFormValidation = async (formParams) => {
  if(formParams.sex == 'DEFAULT'){
    return { error: true, title: "Sexo default", message: "El atributo sexo no puede ser definido como Default" }
  }

  return;
}
