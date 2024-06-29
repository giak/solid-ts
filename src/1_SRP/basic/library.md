# Library Class

## Principe SRP (Single Responsibility Principle)


Imagine que tu as plusieurs boîtes pour ranger tes affaires.
Tu as une boîte pour tes crayons, une boîte pour tes jouets, et une boîte pour tes livres.
Chaque boîte a une seule responsabilité : la boîte des crayons s'occupe des crayons, la boîte des jouets s'occupe des jouets, et ainsi de suite.

> Pour savoir si une classe respecte le SRP, il faut dire: « La classe X fait … » en étant le plus spécifique possible.
> Si la phrase ci-dessus contient des `et` ou des `ou`, alors votre classe a plus d’une responsabilité.
> De façon plus subtile, si elle contient des mots génériques comme `gère` ou `objet` (exemple: gère les utilisateurs, valide les objets), alors vous devriez avoir la puce à l’oreille.

Il est essentiel de découpler le code pour que chaque partie soit responsable d'une seule tâche, en la réalisant de manière simple et efficace, et qu'elle soit modifiable par une seule cause ou acteur qui demande à changer cet état.

## But : application du principe de responsabilité unique


La classe `Library` gère à la fois les documents et les étudiants.
Selon le principe de responsabilité unique, ces responsabilités sont séparées en deux classes distinctes `DocumentManager` et `StudentManager`.

Nommer et ranger permet d'appliquer aussi le principe de responsabilité unique. Exemple : `Document`, `DocumentManager` et `Manager` dans le dossier `document`.

Changements clés :

- Classe `DocumentManager` : gère toutes les opérations liées aux documents.
- Classe `StudentManager` : gère toutes les opérations liées aux étudiants.
- Classe `Library` : délègue la gestion des documents et des étudiants aux classes de gestionnaire respectives.
- Ajout `DocumentErrorHandler` et `StudentErrorHandler` pour gérer les erreurs spécifiques aux documents et aux étudiants.
- Création de fichiers pour chaque type de classe.
- Séparation des interfaces et rangement dans un dossier spécifique (Les interfaces ne sont que du typage, pas du code.).

Cette refactorisation garantit que chaque classe a une seule responsabilité, ce qui rend le code plus maintenable et testable.

Notez que les test unitaires sont exactement les même entre les deux versions.

## Points d'évolution

`borrow` du `DocumentManager` est pas correctement implémenté. il manque la liaison avec `Student`.
En ajoutant cette liaison, nous tombons dans le SRP.
Il faudrait donc ajouter une classe `BorrowManager` pour gérer les emprunts.

Le plus intéressant est d’utiliser un design pattern Facade.
Cela permet :

- de cacher la complexité du système et de fournir une interface simple pour les clients.
- de réduire le couplage entre les classes.
- de suivre le principe de responsabilité unique.

## A noter

Plus on utilise les principes SOLID et les design pattern, plus on s'approche à construire un Framework.
Pour comprendre comment fonctionne un Framework, il crucial de maîtriser les factorisations de code, les design pattern et les principes SOLID.
