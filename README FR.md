## Pour lancer l'app

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Lien de mon Trelo concernant l'organisation du projet #
https://trello.com/invite/b/sUgFowuB/ATTI70abfc6efe47bd419a795f74da477e8d6E62648F/projet-places



##  Ajouter  Env.Local  pour lancer l'app ##
add this path on compass mongodb
= mongodb://127.0.0.1:27017/nom_de_la_db
exemple: mongodb://127.0.0.1:27017/Places_map

## Pour utiliser l'application web veuillez installer les packages suivants pour utiliser l'application ##
Axios
Fontawesome 
Yup
Formik
Next Router

# Pourqoui  nous avons utiliser ces packages pour la web app ?
Axios: Axios est utilisé pour envoyer les données du formulaire au serveur via une requête HTTP POST
Fontawesome:  Pour avoir une grande variété de logo et d'iconne pour les boutons 
Yup: Validation des  entrés du formulaire
Formik: Utilisé pour le formulaire d'ajout et de modification de lieu 
Next Router: Pour redirection des pages 


Page Index:La page d'index permet d'afficher une liste d'adresses récupérées à partir d'un point d'accès API. Elle offre des fonctionnalités de filtrage et de tri des données d'adresse en fonction de divers critères tels que le type, la cuisine, le prix, etc. Voici comment cela fonctionne :

Gestion de l'état : La page utilise le hook useState de React pour gérer l'état des adresses, filteredAdresses, sortConfig, et divers critères de filtre tels que filterType, filterCuisine, filterCuisineAveragePrice, filterBarType, filterArtType, filterArtMovement et filterParkType.
Récupération des données : Lors du montage du composant, le hook useEffect récupère les données d'adresse à partir du point d'accès API en utilisant Axios. Il définit à la fois les états des adresses et des filteredAdresses avec les données récupérées.
Filtrage et tri : La page permet aux utilisateurs de filtrer et de trier dynamiquement les données d'adresse. Le filtrage est effectué en fonction des critères de filtre sélectionnés, tels que le type, la cuisine, le prix, etc. Le tri est implémenté en cliquant sur les en-têtes de tableau, ce qui trie les données en fonction de la clé sélectionnée (par exemple, rue, nom) et de la direction (ascendante ou descendante).
Composants de filtre : Différents composants de filtre, tels que FilterCuisine, FilterBarType, FilterArtType, FilterArtMovement et FilterParkType, sont rendus de manière conditionnelle en fonction du filterType sélectionné. Ces composants permettent aux utilisateurs de sélectionner les critères de filtrage de manière interactive.
Affichage du tableau : Les données filteredAdresses sont affichées sous forme de tableau, chaque ligne représentant une adresse. Les utilisateurs peuvent cliquer sur les en-têtes du tableau pour trier les données en fonction de la clé correspondante.

Page Ajout de lieu:
La page d'ajout d'adresse permet aux utilisateurs d'ajouter de nouveaux lieux à la liste d'adresses. Elle fournit un formulaire où les utilisateurs peuvent saisir des détails tels que le nom, la rue, la ville, le code postal, le pays et le type de lieu (Restaurant, Bar, Musée ou Parc). Voici comment cela fonctionne :

Composant de formulaire : La page rend un formulaire en utilisant Formik, une bibliothèque de formulaire pour React. Le formulaire comprend des champs de saisie pour le nom, la rue, la ville, le code postal, le pays et un champ dynamique en fonction du type de lieu sélectionné.
Rendu de champ dynamique : En fonction du type de lieu sélectionné (Restaurant, Bar, Musée ou Parc), un composant de champ dynamique correspondant est rendu en dessous des champs de formulaire. Par exemple, si l'utilisateur sélectionne "Restaurant", des champs supplémentaires liés aux restaurants sont affichés.
Validation du formulaire : Le formulaire inclut une validation à l'aide du schéma Yup. Il garantit que les champs requis (nom, rue, ville, code postal, pays) sont remplis et que le code postal est un nombre.
Fonctionnalité de soumission : Lorsque l'utilisateur soumet le formulaire, la fonction de soumission est déclenchée. Elle envoie une requête POST à l'endpoint API backend (/api/addresses) en utilisant Axios. Les nouvelles données d'adresse, y compris le type de lieu, sont envoyées dans le corps de la requête. Après une soumission réussie, le formulaire est réinitialisé et l'utilisateur est redirigé vers la page d'accueil.




Page d'edit de lieu:
La page de modification permet aux utilisateurs de modifier les lieux existants dans la liste d'adresses. Elle affiche un formulaire prérempli avec les détails de l'adresse sélectionnée, y compris le nom, la rue, la ville, le code postal, le pays et le type de lieu (Restaurant, Bar, Musée ou Parc). Voici comment cela fonctionne :

Formulaire prérempli : La page récupère les détails de l'adresse sélectionnée en utilisant la fonction getServerSideProps, qui récupère les données à partir de l'API backend. Le formulaire est ensuite prérempli avec ces détails pour que l'utilisateur puisse les modifier.
Rendu de champ dynamique : En fonction du type de lieu de l'adresse sélectionnée, la page rend les composants de champ dynamique correspondants sous les champs de formulaire standard. Par exemple, si l'adresse est de type "Restaurant", des champs supplémentaires liés aux restaurants sont affichés.
Soumission du formulaire : Lorsque l'utilisateur soumet le formulaire après avoir apporté des modifications, la fonction handleSubmit est déclenchée. Elle envoie une requête PATCH à l'endpoint API backend (/api/addresses/:addressId) en utilisant Axios, mettant à jour l'adresse avec les données modifiées. Après une soumission réussie, l'utilisateur est redirigé vers la page de détails de l'adresse modifiée.
Fonctionnalité de suppression : La page offre également la possibilité de supprimer l'adresse sélectionnée. Lorsque l'utilisateur clique sur le bouton "Supprimer", la fonction handledelete est déclenchée. Elle envoie une requête DELETE à l'endpoint API backend (/api/addresses/:addressId), supprimant l'adresse de la base de données. Après la suppression, l'utilisateur est redirigé vers la page d'accueil

Page de detail des lieus: 
estion de l'État :
Le composant gère l'état à l'aide des hooks useState et useEffect de React.
Les adresses sont récupérées depuis une API backend (http://localhost:3000/api/addresses) à l'aide d'Axios dans le hook useEffect avec un tableau de dépendances vide, garantissant que les données ne sont récupérées qu'une seule fois lors du montage du composant.
Les variables d'état sont utilisées pour stocker la liste complète des adresses, les adresses filtrées, la configuration de tri et les différents critères de filtre. Les effets secondaires sont gérés pour appliquer les filtres en fonction des changements d'état.


Filtres de recheches:Le composant HomePage implémente des filtres de recherche pour différents types d'adresses, tels que les restaurants, les bars, les musées et les parcs. Les utilisateurs peuvent filtrer les adresses en fonction de différents critères et voir les résultats sous forme de tableau. Voici un aperçu de la fonctionnalité :

Gestion de l'état : Le composant gère l'état à l'aide du hook useState de React. Il maintient des variables d'état pour la liste des adresses, les adresses filtrées, la configuration de tri et différents critères de filtre.
Récupération des données : Le composant récupère la liste des adresses depuis l'API backend en utilisant Axios dans le hook useEffect avec un tableau de dépendances vide. Cela garantit que les données ne sont récupérées qu'une seule fois lorsque le composant est monté.
Filtrage : Les utilisateurs peuvent filtrer les adresses en fonction de leur type (restaurant, bar, musée ou parc) et de critères supplémentaires tels que le type de cuisine, le type de bar, le type d'art, le mouvement artistique et le type de parc. Le composant rend dynamiquement les composants de filtre en fonction du type d'adresse sélectionné.
Tri : Les utilisateurs peuvent trier les adresses filtrées en fonction de différents attributs tels que la rue, le nom, la ville, le pays, le code postal et le type. En cliquant sur les en-têtes de tableau, on bascule entre l'ordre ascendant et descendant.
Affichage du tableau : Les adresses filtrées sont affichées sous forme de tableau avec des colonnes pour la rue, le nom, la ville, le pays, le code postal et le type. Chaque ligne contient des liens vers la page de modification de l'adresse correspondante, permettant aux utilisateurs de consulter et de modifier les détails de l'adresse.





Base de donnée qui a été générer par un script python pour génerer des lieux correspondant au schéma de la base de donnée MongoDB:
Vous pouvez utiliser testdatas.json pour importer des données dans votre base de donnée mongodb.





© Developper Par Ranvir Cheema

