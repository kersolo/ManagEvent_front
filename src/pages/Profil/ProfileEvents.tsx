import { useQuery } from "@tanstack/react-query";
import { getEventsByUserIdForProfilePage } from "../../services/api/profile";
import { EventInProfilePageInterface } from "../../services/interfaces/ProfileInterface";

export default function ProfileEvents({ id }: { id: string }) {
  const {
    data: events,
    isLoading,
    isError,
  } = useQuery<EventInProfilePageInterface[] | undefined>({
    queryKey: ["events"],
    queryFn: () => getEventsByUserIdForProfilePage(id),
    staleTime: 0,
  });

  return isLoading ? (
    <p>Loader</p>
  ) : isError ? (
    <p>Une erreur s'est produite</p>
  ) : (
    <div className="flex flex-col gap-4 md:gap-6">
      {events && events.length > 0 ? (
        events.map((event, index) => (
          <div key={index} className="border-dp p-small">
            <p className="text-sm md:text-lg">
              {event.date.toLocaleDateString()}
            </p>
            <h3 className="h3-size text-center mb-2 md:mb-4">{event.title}</h3>
          </div>
        ))
      ) : (
        <p>Vous n'êtes inscrit à aucun événement</p>
      )}
    </div>
  );
}
