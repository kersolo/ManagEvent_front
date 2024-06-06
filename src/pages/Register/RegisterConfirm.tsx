export default function RegisterConfirmEmail() {
  return (
    <div className="text-center mt-24">Page de confirmation de l'email</div>
  );
  //requete back pour vérifer le confirmToken
  // si ok
  // return <div>Votre email est validé</div> + bouton vers login;

  //si pas ok
  // return <div>Une erreur s'est produite, veuillez recommencer la procédure d'inscription</div> + bouton vers register
}
