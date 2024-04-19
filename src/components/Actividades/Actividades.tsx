"use client"

import { useEffect, useState } from "react";
import { Card } from "./Card";
import { api } from "@/utils/api";

const Events = () => {
  const [eventsList, setEventsList] = useState([])

  useEffect(() => {
      api.get("/Eventos").then(response => {
        console.log(response.data.content.items)
        setEventsList(response.data.content.items)
      })
  }, [])

  return (
    <section id="contact" className="overflow-hidden py-8">
      <div className="container">
        <div
            className="
              w-full
              max-w-[1240px]
              grid
              grid-cols-[repeat(auto-fill,minmax(360px,1fr))]
              gap-8
              mx-auto"
          >
            {eventsList.map(event => (
              <Card
                key={event.id}
                title={event.nameType}
                description={event.description}
                imageURL={event.image}
              />
            ))}
          </div>
        </div>
    </section>
  );
};
  
export default Events;