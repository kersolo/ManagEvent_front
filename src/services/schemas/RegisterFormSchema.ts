import { object, ref, string } from "yup";

export const RegisterFormSchema = object({
  email: string().required("L'email est requis").email("email non valide"),
  password: string()
    .required("Le mot de passe est requis")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .matches(
      RegExp("(.*[a-z].*)"),
      "Votre mot de passe doit contenir au moins une miniscule"
    )
    .matches(
      RegExp("(.*[A-Z].*)"),
      "Votre mot de passe doit contenir au moins une majuscule"
    )
    .matches(
      RegExp("(.*\\d.*)"),
      "Votre mot de passe doit contenir au moins un chiffre"
    )
    .matches(
      RegExp('[!@#$%^&*(),.?":{}|<>]'),
      "Votre mot de passe doit contenir au moins un caracteère special"
    ),
  confirmPassword: string()
    .required("La confirmation du mot de passe est requise")
    .matches(
      RegExp("(.*[a-z].*)"),
      "Votre mot de passe doit contenir au moins une miniscule"
    )
    .matches(
      RegExp("(.*[A-Z].*)"),
      "Votre mot de passe doit contenir au moins une majuscule"
    )
    .matches(
      RegExp("(.*\\d.*)"),
      "Votre mot de passe doit contenir au moins un chiffre"
    )
    .matches(
      RegExp('[!@#$%^&*(),.?":{}|<>]'),
      'Votre mot de passe doit contenir au moins un caracteère special !@#$%^&*(),.?":{}|<>'
    )
    .oneOf([ref("password")], "Le mot de passe ne correspond pas"),
}).required();
