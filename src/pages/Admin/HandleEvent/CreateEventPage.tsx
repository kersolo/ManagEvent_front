import ButtonDefault from "../../../components/ButtonDefault";

export default function CreateEventPage() {
  return (
    <form className="flex flex-col gap-8 mx-large md:w-2/3 md:m-auto my-12 md:my-16">
      <h1>Créer un événement</h1>
      <input type="text" />
      <div className="flex gap-10">
        <input type="date" className="grow" />
        <input type="date" className="grow" />
      </div>
      <input type="text" />
      <input type="text" />
      <ButtonDefault variant="tertiary">Ajouter une tâche</ButtonDefault>
      <ButtonDefault variant="primary">Valider</ButtonDefault>
      <ButtonDefault variant="secondary">Annuler</ButtonDefault>
    </form>
  );
}
