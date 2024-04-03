import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Command } from '@phosphor-icons/react';
import Colors from '../utils/colors';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTrigger
} from '../utils/ui/alert-dialog.tsx';
import { Badge } from '../utils/ui/badge.tsx';
import Like from './like';
import { CardContainer, CardItem } from '../utils/ui/3d-card.tsx';

function pokeCard({ pokemon, shinyMode }) {
  const [description, setDescription] = useState([]);

  const getCharacteristics = async () => {
    try {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemon.name}`
      );
      setDescription(res.data.flavor_text_entries);
    } catch (error) {
      console.log('error');
    }
  };
  // console.log(habilities);

  const heightInFeet =
    Math.round((pokemon.height * 0.328084 + Number.EPSILON) * 100) / 100;

  const weightInPounds = Math.round(pokemon.weight * 2.2046);

  // description map filter version red
  const descriptionMap = description.map((item) => {
    if (item.version.name === 'red') {
      return item.flavor_text.replace(/\s+/g, ' ');
    }
    return null; // Add a return statement for other cases
  });

  useEffect(() => {
    getCharacteristics();
  }, []);
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button
          type="button"
          className="relative flex flex-col border hover:bg-zinc-900 border-zinc-900 rounded-md bg-[#0A0A0A] w-36 h-36 transition duration-300 ease-in-out transform hover:scale-110 justify-center items-center"
        >
          <img
            // src={pokemon.sprites.front_default}
            src={
              shinyMode
                ? pokemon.sprites.front_shiny
                : pokemon.sprites.front_default
            }
            alt={pokemon.name}
            loading="lazy"
            className="w-20 h-20 mx-auto bg-cover transition duration-300 ease-in-out transform hover:scale-110"
          />
          <h1 className="text-amber-200 text-xs font-bold text-center lowercase">
            {pokemon.name}
          </h1>
          <h1 className="px-4 py-2 absolute top-0 left-0 text-amber-400 text-xs font-bold text-center lowercase tracking-widest">
            #{pokemon.id}
          </h1>
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-zinc-900 rounded-md bg-[#0A0A0A] xl:w-96 xl:h-96">
        <AlertDialogHeader className="w-full flex items-center justify-center">
          <span className="flex flex-row gap-2 items-center pt-8">
            {pokemon.abilities.map((item) => (
              <div
                key={item.ability.name}
                className="flex flex-row gap-2 items-center"
              >
                <Badge className="text-amber-400 text-xs font-bold text-center lowercase border border-zinc-900 bg-[#0A0A0A]">
                  {item.ability.name}
                </Badge>
              </div>
            ))}
          </span>
          <CardContainer className="w-full h-full">
            <CardItem translateZ="50">
              <img
                src={
                  shinyMode
                    ? pokemon.sprites.front_shiny
                    : pokemon.sprites.front_default
                }
                alt={pokemon.name}
                loading="lazy"
                className="w-32 h-32 mx-auto bg-cover"
              />
            </CardItem>
          </CardContainer>

          <Badge
            style={{
              border: `1px solid ${Colors[pokemon.types[0].type.name]}`,
              backgroundColor: Colors[pokemon.types[0].type.name]
            }}
            className="text-[#0A0A0A] border font-bold text-xs lowercase"
          >
            {pokemon.types[0].type.name}
          </Badge>
          <blockquote className="italic py-2 text-xs font-bold text-amber-200 text-pretty">
            &quot;{descriptionMap}
          </blockquote>
          <article className="w-full flex flex-col gap-2 justify-start">
            <span className="flex flex-row gap-4 items-center">
              <h1 className="text-amber-200 text-xs font-bold text-center lowercase">
                Height
              </h1>
              <h1 className="text-amber-400 text-xs font-bold text-center lowercase">
                {heightInFeet}&quot;
              </h1>
              <h1 className="text-amber-400 text-xs font-bold text-center lowercase">
                {pokemon.height}m
              </h1>
            </span>
            <span className="flex flex-row gap-4 items-center">
              <h1 className="text-amber-200 text-xs font-bold text-center lowercase">
                Weight
              </h1>
              <h1 className="text-amber-400 text-xs font-bold text-center lowercase">
                {weightInPounds}lbs
              </h1>
              <h1 className="text-amber-400 text-xs font-bold text-center lowercase">
                {pokemon.weight}kg
              </h1>
            </span>
          </article>
        </AlertDialogHeader>
        <div className="flex flex-row">
          <AlertDialogCancel className="absolute top-6 left-0 m-6 bg-inherit text-amber-200">
            <span className="flex flex-row gap-1 items-center justify-center border border-zinc-900 rounded-md bg-[#0A0A0A] px-2 py-0.5">
              <Command size={13} weight="bold" />
              <h1 className="font-bold text-xs">+ esc</h1>
            </span>
          </AlertDialogCancel>
          <section className="absolute top-0 right-0 m-6 bg-inherit">
            <button
              type="button"
              className="flex flex-row gap-1 items-center justify-center border border-zinc-900 rounded-md bg-[#0A0A0A] px-2 py-0.5"
            >
              <Like data={pokemon} />
            </button>
          </section>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default pokeCard;
