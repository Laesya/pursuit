# Wild Code School - Project 2 - Trivial-Pursuit
##### This app uses JService API => http://jservice.io/

# In the project directory, run `npm start`
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


(Rules for french devs below)

## Règles du Wild Pursuit

Difficulté d'une question: multiple de 100 compris entre 100 et 1000.

### En tant que joueur je répond à une question:

- Si je me trompe je ne gagne pas de point.
- Si je réussis, je gagne x points, x étant la difficulté de la question.
- Si je réussis ET que la question était une question 'Camembert', je gagne 5* ce nombre de points ET un quart de 'Camembert'

### En tant que joueur, j'obtiens mon quatrième quart de 'Camembert':

- Lors de mon prochain tour, je n'aurai plus le choix de la catégorie pour ma question, et ma question sera plus difficile que les autres.
- ... Mais si je répond juste à cette question finale, la partie s'arrête. Les points de cette question sont rajoutés à mon score.
- Décompte final. Je gagne si j'ai bien le plus haut score !

- Dans l'absolu je peux gagner sans avoir les 4 Camemberts, à partir du moment où j'ai le plus de points.
- Si j'ai répondu à la question finale je reste avantagé, puisque je l'ai ajoutée à mon score.

### Comment détermine-t-on si une question est de type 'Camembert' ou non ?
#### Deux modèles possibles, dans l'attente de l'étude de marché pour choisir l'un ou l'autre:
- Au début du TOUR D'UN JOUEUR, il y a une probabilité (z %, peut-être 20 ou 25) pour que sa question soit une question Camembert;
- Au début d'un TOUR DE JEU, il y a une probabilité (z %) pour que TOUTES les questions de ce tour soient des questions Camembert

##### Rappel de vocabulaire
- Tour d'un joueur: 1 question, 1 réponse
- Tour de jeu: tour d'un joueur * nombre de joueurs