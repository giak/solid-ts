# Library Class

## But : appliquer le principe OCP (Open/Closed Principle) aux documents

### Principe OCP

Imagine que tu as une boîte à outils magique.
Cette boîte est très spéciale parce qu'elle peut se transformer pour inclure de nouveaux outils sans que tu aies besoin de la démonter ou de modifier les outils déjà présents dedans.
Tu peux simplement ajouter des nouveaux compartiments avec les outils que tu veux, tout en gardant les outils déjà existants intacts.

> Si vous avez des conditions `if`, un `switch`, des paramètres de fonctions trop complexes, il faut simplifier la classes avec des sous classes ou des classes abstraites ou des interfaces.
 
Le principe OCP (Open/Closed Principle) est un principe de la programmation orientée objet qui stipule qu'une classe doit être ouverte à l'extension mais fermée à la modification.
Cela signifie que vous pouvez ajouter de nouvelles fonctionnalités à une classe sans modifier son code source.

Si vous devez modifier le corps d'une méthode, la signature ou le type d'une propriété d'une classe, vous risquez fortement de violer le principe OCP.
Le système ne doit pas avoir besoin de modifier ou de dépendre de la représentation interne de nos classes, ce qui nous permet de la modifier librement lors de futures évolutions.

Les classes devraient être conçues de manière à pouvoir être étendues (par héritage ou composition) sans modification de leur code existant, afin de garantir une plus grande flexibilité et évolutivité.



### Application du principe OCP

La classe `Document` est ouverte à l'extension mais fermée à la modification, en partie verrouillée par l'interface `DocumentOperationInterface` (et/ou en les rendant `abstract`).
Elle peut être étendue par des sous-classes pour ajouter de nouvelles fonctionnalités sans modifier son code source.

Les différentes classes de documents (`Book`, `Paper`, `Journal`) étendent la classe `Document`.
Chaque classe de document a ses propres méthodes et propriétés spécifiques, mais elles partagent toutes les mêmes méthodes de base définies dans la classe `Document`.

`DocumentFactory` est une classe qui crée des instances de documents en fonction de leur type.
Elle suit le principe OCP en étant ouverte à l'extension (nouveaux types de documents) mais fermée à la modification (pas besoin de modifier la classe pour ajouter un nouveau type de document). 
Son utilisation dans `DocumentManager` permet de créer des documents sans connaître les détails de leur implémentation.
