// ========== Static Movie Data ==========
const movies = {
  trending: [
    {
      id: 1,
      title: "Inception",
      overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
      year: 2010,
      rating: 8.8,
      runtime: "2h 28m"
    },
    {
      id: 2,
      title: "The Dark Knight",
      overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/hqkIcbrOHL86UncnHIsHVcVmzue.jpg",
      year: 2008,
      rating: 9.0,
      runtime: "2h 32m"
    },
    {
      id: 3,
      title: "Interstellar",
      overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/xJHokMblJvph8BT6zwt9B7DIU7H.jpg",
      year: 2014,
      rating: 8.6,
      runtime: "2h 49m"
    },
    {
      id: 4,
      title: "The Matrix",
      overview: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
      poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/fNG7VgrNkfpY8lK5e1x5S1Q2x4.jpg",
      year: 1999,
      rating: 8.7,
      runtime: "2h 16m"
    },
    {
      id: 5,
      title: "Pulp Fiction",
      overview: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
      year: 1994,
      rating: 8.9,
      runtime: "2h 34m"
    },
    {
      id: 6,
      title: "Fight Club",
      overview: "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
      poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",
      year: 1999,
      rating: 8.8,
      runtime: "2h 19m"
    },
    {
      id: 7,
      title: "Forrest Gump",
      overview: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
      poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/7c9UVPPiTPltoux3w62b0hM6k4.jpg",
      year: 1994,
      rating: 8.8,
      runtime: "2h 22m"
    },
    {
      id: 8,
      title: "The Shawshank Redemption",
      overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3d0vVw.jpg",
      backdrop: "https://image.tmdb.org/t/p/original/kXfqf9p6q0x0x0x0x0x0x0x0x.jpg",
      year: 1994,
      rating: 9.3,
      runtime: "2h 22m"
    }
  ],
  topRated: [
    {
      id: 9,
      title: "The Godfather",
      overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      year: 1972,
      rating: 9.2,
      runtime: "2h 55m"
    },
    {
      id: 10,
      title: "Schindler's List",
      overview: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      poster: "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      year: 1993,
      rating: 8.9,
      runtime: "3h 15m"
    },
    {
      id: 11,
      title: "The Lord of the Rings: The Return of the King",
      overview: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
      poster: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
      year: 2003,
      rating: 8.9,
      runtime: "3h 21m"
    },
    {
      id: 12,
      title: "12 Angry Men",
      overview: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      poster: "https://image.tmdb.org/t/p/w500/ow3wq89wM8qd5X7hWKxiRfsFf9.jpg",
      year: 1957,
      rating: 9.0,
      runtime: "1h 36m"
    },
    {
      id: 13,
      title: "The Good, the Bad and the Ugly",
      overview: "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
      poster: "https://image.tmdb.org/t/p/w500/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
      year: 1966,
      rating: 8.8,
      runtime: "2h 58m"
    },
    {
      id: 14,
      title: "Parasite",
      overview: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      poster: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      year: 2019,
      rating: 8.5,
      runtime: "2h 12m"
    },
    {
      id: 15,
      title: "Spirited Away",
      overview: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
      poster: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      year: 2001,
      rating: 8.6,
      runtime: "2h 5m"
    }
  ],
  action: [
    {
      id: 16,
      title: "John Wick",
      overview: "An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took everything from him.",
      poster: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcRT9tyPBe8eq3e.jpg",
      year: 2014,
      rating: 7.4,
      runtime: "1h 41m"
    },
    {
      id: 17,
      title: "Mad Max: Fury Road",
      overview: "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
      poster: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
      year: 2015,
      rating: 7.6,
      runtime: "2h 0m"
    },
    {
      id: 18,
      title: "The Avengers",
      overview: "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      poster: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
      year: 2012,
      rating: 8.0,
      runtime: "2h 23m"
    },
    {
      id: 19,
      title: "Gladiator",
      overview: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
      poster: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
      year: 2000,
      rating: 8.5,
      runtime: "2h 35m"
    },
    {
      id: 20,
      title: "Die Hard",
      overview: "An NYPD officer tries to save his wife and several others taken hostage by German terrorists during a Christmas party at the Nakatomi Plaza in Los Angeles.",
      poster: "https://image.tmdb.org/t/p/w500/yFihKmBtpeEYKjnIl640Mg3ZrZy.jpg",
      year: 1988,
      rating: 8.2,
      runtime: "2h 12m"
    },
    {
      id: 21,
      title: "Mission: Impossible - Fallout",
      overview: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.",
      poster: "https://image.tmdb.org/t/p/w500/AkJQpZp9WoNdj7pLYSj1L0RcMMN.jpg",
      year: 2018,
      rating: 7.7,
      runtime: "2h 27m"
    }
  ],
  comedy: [
    {
      id: 22,
      title: "The Grand Budapest Hotel",
      overview: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDttOz.jpg",
      year: 2014,
      rating: 8.1,
      runtime: "1h 39m"
    },
    {
      id: 23,
      title: "Superbad",
      overview: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
      poster: "https://image.tmdb.org/t/p/w500/ek8eLybxdt2vrTg9zCnGYyZ0M60.jpg",
      year: 2007,
      rating: 7.6,
      runtime: "1h 53m"
    },
    {
      id: 24,
      title: "The Hangover",
      overview: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their missing friend.",
      poster: "https://image.tmdb.org/t/p/w500/uluhlXubGucELJxUCLXbTEUcErt.jpg",
      year: 2009,
      rating: 7.7,
      runtime: "1h 40m"
    },
    {
      id: 25,
      title: "Deadpool",
      overview: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
      poster: "https://image.tmdb.org/t/p/w500/yGSxMiF0cYuAiyuve5Hm6pj7vCs.jpg",
      year: 2016,
      rating: 8.0,
      runtime: "1h 48m"
    },
    {
      id: 26,
      title: "Knives Out",
      overview: "A detective investigates the death of a patriarch of an eccentric, combative family.",
      poster: "https://image.tmdb.org/t/p/w500/pThyQovXQpwRtszawS7jP7Y5X0.jpg",
      year: 2019,
      rating: 7.9,
      runtime: "2h 10m"
    }
  ],
  horror: [
    {
      id: 27,
      title: "Get Out",
      overview: "A young African-American visits his white girlfriend's parents for the weekend, where his uneasiness about their reception of him eventually reaches a boiling point.",
      poster: "https://image.tmdb.org/t/p/w500/tFXcQnr0zXl1W5wuJe0Y8YDbBp4.jpg",
      year: 2017,
      rating: 7.7,
      runtime: "1h 44m"
    },
    {
      id: 28,
      title: "A Quiet Place",
      overview: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
      poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t9fgh5Jb1xW0X0.jpg",
      year: 2018,
      rating: 7.5,
      runtime: "1h 30m"
    },
    {
      id: 29,
      title: "Hereditary",
      overview: "A grieving family is haunted by tragic and disturbing occurrences.",
      poster: "https://image.tmdb.org/t/p/w500/p9fm0x2h0x0x0x0x0x0x0x0x.jpg",
      year: 2018,
      rating: 7.3,
      runtime: "2h 7m"
    },
    {
      id: 30,
      title: "The Conjuring",
      overview: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
      poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tm0733Q0x0x0x0.jpg",
      year: 2013,
      rating: 7.5,
      runtime: "1h 52m"
    },
    {
      id: 31,
      title: "It",
      overview: "In the summer of 1989, a group of bullied kids band together to destroy a shape-shifting monster, which disguises itself as a clown and preys on the children of Derry, Maine.",
      poster: "https://image.tmdb.org/t/p/w500/9E2y5Q2K0x0x0x0x0x0x0x0x.jpg",
      year: 2017,
      rating: 7.3,
      runtime: "2h 15m"
    }
  ]
};

// ========== DOM Elements ==========
const trendingRow = document.getElementById('trending');
const topRatedRow = document.getElementById('topRated');
const actionRow = document.getElementById('action');
const comedyRow = document.getElementById('comedy');
const horrorRow = document.getElementById('horror');
const modal = document.getElementById('movieModal');
const closeModalBtn = document.querySelector('.close-modal');
const searchInput = document.getElementById('searchInput');
const navbar = document.querySelector('.navbar');

// ========== Create Poster Card ==========
function createPoster(movie) {
  const div = document.createElement('div');
  div.className = 'poster';
  div.innerHTML = `
    <img src="${movie.poster}" alt="${movie.title}" loading="lazy" 
         onerror="this.src='https://via.placeholder.com/200x300/333/fff?text=No+Image'" />
    <div class="poster-overlay">
      <div class="poster-title">${movie.title}</div>
      <div class="poster-rating">★ ${movie.rating}</div>
    </div>
  `;
  div.addEventListener('click', () => openModal(movie));
  return div;
}

// ========== Render Rows ==========
function renderRow(container, movieList) {
  container.innerHTML = '';
  movieList.forEach(movie => {
    container.appendChild(createPoster(movie));
  });
}

// ========== Open Modal ==========
function openModal(movie) {
  document.getElementById('modalPoster').src = movie.poster;
  document.getElementById('modalTitle').textContent = movie.title;
  document.getElementById('modalYear').textContent = movie.year;
  document.getElementById('modalRating').textContent = `★ ${movie.rating}`;
  document.getElementById('modalRuntime').textContent = movie.runtime || '';
  document.getElementById('modalOverview').textContent = movie.overview;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ========== Close Modal ==========
function closeModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// ========== Search ==========
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  
  if (!query) {
    // Reset all rows
    renderRow(trendingRow, movies.trending);
    renderRow(topRatedRow, movies.topRated);
    renderRow(actionRow, movies.action);
    renderRow(comedyRow, movies.comedy);
    renderRow(horrorRow, movies.horror);
    return;
  }

  // Search across all movies
  const allMovies = [
    ...movies.trending,
    ...movies.topRated,
    ...movies.action,
    ...movies.comedy,
    ...movies.horror
  ];

  const filtered = allMovies.filter(m => 
    m.title.toLowerCase().includes(query) || 
    m.overview.toLowerCase().includes(query)
  );

  // Show filtered results in the first row, clear others
  renderRow(trendingRow, filtered);
  topRatedRow.innerHTML = '';
  actionRow.innerHTML = '';
  comedyRow.innerHTML = '';
  horrorRow.innerHTML = '';
  
  // Update titles temporarily
  document.querySelector('#trending').previousElementSibling.textContent = 
    filtered.length ? `Search results for "${query}"` : 'No results found';
});

// ========== Navbar scroll effect ==========
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ========== Hero "More Info" button ==========
document.getElementById('heroInfoBtn').addEventListener('click', () => {
  openModal(movies.trending[0]); // Inception
});

// ========== Initial Render ==========
renderRow(trendingRow, movies.trending);
renderRow(topRatedRow, movies.topRated);
renderRow(actionRow, movies.action);
renderRow(comedyRow, movies.comedy);
renderRow(horrorRow, movies.horror);

console.log('Netflix Clone loaded successfully!');
