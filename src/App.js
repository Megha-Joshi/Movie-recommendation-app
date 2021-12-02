import "./styles.css";

import React, { useState } from "react";
import "./styles.css";

var movies = {
  Comedy: [
    {
      name: "The Wolf of Wall Street",
      description:
        "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker.",
      rating: "8/10"
    },
    {
      name: "The Hangover",
      description:
        "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
      rating: "8/10"
    },
    {
      name: "We're the Millers",
      description:
        "A veteran pot dealer creates a fake family as part of his plan to move a huge shipment of weed.",
      rating: "7/10"
    }
  ],
  Sci_fi: [
    {
      name: "Spider-Man",
      description:
        "When bitten by a genetically modified spider, a shy high school student gains spider-like abilities that he eventually must use to fight evil as a superhero",
      rating: "7/10"
    },
    {
      name: "Inception",
      description:
        "A thief who steals corporate secrets is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
      rating: "9/10"
    },
    {
      name: "The Matrix",
      description:
        "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth.",
      rating: "9/10"
    }
  ],
  Horror: [
    {
      name: "American Psycho",
      description:
        "A wealthy investment banking executive, hides his alternate psychopathic ego from his co-workers and friends as he delves deeper into his violent fantasies.",
      rating: "7.5/10"
    },
    {
      name: "The Others",
      description:
        "A woman who lives in her darkened old family house with her two photosensitive children becomes convinced that the home is haunted.",
      rating: "8/10"
    },
    {
      name: "What We Do in the Shadows",
      description:
        "3 vampires who are struggling with the mundane aspects of modern life, like paying rent, keeping up with the chore wheel, and overcoming flatmate conflicts..",
      rating: "9/10"
    }
  ],
  Romance: [
    {
      name: "Colonia",
      description:
        "A young woman's desperate search for her abducted boyfriend draws her into the infamous Colonia Dignidad, a sect nobody has ever escaped from.",
      rating: "7/10"
    },
    {
      name: "The Great Gatsby",
      description:
        "A writer and wall street trader, finds himself drawn to the past and lifestyle of his millionaire neighbor.",
      rating: "7.5/10"
    },
    {
      name: "The Secret in Their Eyes",
      description:
        "A retired legal counselor writes a novel hoping to find closure for his unreciprocated love with his superior.",
      rating: "9/10"
    }
  ],
  Animation: [
    {
      name: "How to Train Your Dragon",
      description:
        "A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself",
      rating: "8/10"
    },
    {
      name: "Tangled",
      description:
        "The magically long-haired Rapunzel has spent her entire life in a tower, but now that a runaway thief has stumbled upon her, she is about to discover the world for the first time.",
      rating: "10/10"
    },
    {
      name: "Shrek",
      description:
        "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.",
      rating: "9/10"
    }
  ]
};
var movie = Object.keys(movies);

export default function App() {
  const [genreAsked, setGenreAsked] = useState("Comedy");

  function genreClick(genre) {
    // var meaning = books[genre];
    setGenreAsked(genre);
  }
  return (
    <div className="App">
      <h1>Movies</h1>
      <p style={{ fontSize: "small" }}>
        {" "}
        Check these books out according to your favourite genre with ratings by
        me!{" "}
      </p>
      <div>
        {movie.map((genre) => (
          <button
            onClick={() => genreClick(genre)}
            style={{
              cursor: "pointer",
              borderRadius: "0.5rem",
              background: "#9FA1A6",
              padding: "1rem",
              border: "1px solid black",
              margin: "1rem 0.5rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movies[genreAsked].map((result) => (
            <li
              key={result.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #9CA3AF",
                width: "80%",
                borderRadius: "0.5rem",
                margin: "1rem 0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}>{result.name}</div>
              <div style={{ fontSize: "larger" }}>{result.description}</div>
              <div style={{ fontSize: "larger" }}>{result.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
