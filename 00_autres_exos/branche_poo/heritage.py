# Définition de la classe parent
class Vaisseau:
    # Constructeur
    def __init__(self, name, type, size):
        self.__name = str(name)
        self.__type = str(type)
        self.__size = float(size)

    # Définition des getters
    def getName(self):
        return self.__name
    def getType(self):
        return self.__type
    def getSize(self):
        return self.__size
    
    # Définition des setters
    def setName(self, name):
        self.__name = name
        print("\nMise à jour du nom :", self.__name)

# Création d'une classe enfant
class Croiseur(Vaisseau): 
    def __init__(self, name, type, size, capacity, loading = 0):
        super().__init__(name, type, size)
        self.__capacity = int(capacity)
        self.__loading = int(loading)

    # Définition des getters
    def getCapacity(self):
        return self.__capacity
    def getLoading(self):
        return self.__loading
    
    # Définition des setters 
    def setLoading(self, loading):
        if loading <= self.__capacity:
            self.__loading = loading
            print(f"\nMise à jour du chargement (+{loading}): {self.__loading} hommes")
        else:
            print(f"\nMise à jour du chargement (+{loading}): ⛔️ Dépassement de la capacité maximale")

    def chargerTroupes(self, new_loading):
        if self.__loading + new_loading <= self.__capacity:
            self.__loading += new_loading
            print("Nouveau chargement (+", new_loading, "hommes) :", self.__loading, "hommes")
        else: 
            print("Nouveau chargement (+", new_loading, "hommes) : ⛔️ Dépassement de la capacité maximale")
        return self.__loading

    def dechargerTroupes(self, new_loading):
        self.__loading -= new_loading
        print("Nouveau chargement (-", new_loading, "hommes) :", self.__loading, "hommes")

# Création d'une classe enfant
class Intercepteur(Vaisseau): 
    def __init__(self, name, type, size, nb_canons, max_canons = 4):
        super().__init__(name, type, size)
        self.__nb_canons = int(nb_canons)
        self.__max_canons = max_canons

    # Définition des getters
    def getCanons(self):
        return self.__nb_canons
    def getMaxCanons(self):
        return self.__max_canons
    
    # Définition des setters
    def setCanons(self, new_canons):
        if new_canons <= self.__max_canons:
            self.__nb_canons = new_canons
            print(f"\nMise à jour du nombre de canons : {self.__nb_canons}")
        else: 
            print(f"\nMise à jour du nombre de canons : ⛔️ Dépassement du nombre maximal ({new_canons} > max.{self.__max_canons})")
    
    def tirer(self):
        print("Action : Tire !")
        if self.__nb_canons > 0:
            self.__nb_canons -= 1
            print("Tirs restants :", self.__nb_canons)
        else: 
            print(f"Vous n'avez plus de canons ! Rechargez votre {self.getName()}.")

    def recharger(self):
        print("Action : Recharge")
        if self.__nb_canons < self.__max_canons:
            self.__nb_canons = self.__max_canons
            print("Tirs restants :", self.__nb_canons)
        else: 
            print(f"Votre {self.getName()} est déjà chargé ({self.__nb_canons} canons)")

# Fonction qui prend un vaisseau en paramètre et affiche ses capacités
def displayFeatures(vaisseau):
    if isinstance(vaisseau, Vaisseau):
        print("\n🚀 Caractéristiques du vaisseau", vaisseau.getName())
        if isinstance(vaisseau, Croiseur):
            print("Nom :", vaisseau.getName())
            print("Type :", vaisseau.getType())
            print("Size :", vaisseau.getSize(), "mètres")
            print("Capacité :", vaisseau.getCapacity(), "hommes")
            print("Chargement :", vaisseau.getLoading(), "hommes")
        elif isinstance(vaisseau, Intercepteur):
            print("Nom :", vaisseau.getName())
            print("Type :", vaisseau.getType())
            print("Size :", vaisseau.getSize(), "mètres")
            print("Nombre de canons :", vaisseau.getCanons())
            print("Nombre maximal de canons :", vaisseau.getMaxCanons())
        return vaisseau.getName()

# Instanciation de classe
acclamator = Croiseur("Acclamator", "Croiseur", 752, 700)
corvette = Croiseur("Corvette corellienne CR90", "Croiseur", 150, 165)
xwing = Intercepteur("X-wing", "Intercepteur", 12.5, 2)
ywing = Intercepteur("Y-wing", "Intercepteur", 23, 2)

# Appel des méthodes de l'instance Acclamator de type Croiseur
displayFeatures(acclamator)
acclamator.setName("Toto")
acclamator.setLoading(440)
print("\n🔥 Actions du vaisseau", acclamator.getName())
acclamator.chargerTroupes(600)
acclamator.chargerTroupes(20)
acclamator.chargerTroupes(100)
acclamator.dechargerTroupes(10)
print("\n--------------------")

# Appel des méthodes de l'instance Corvette de type Croiseur
displayFeatures(corvette)
print("\n🔥 Actions du vaisseau", corvette.getName())
corvette.chargerTroupes(15)
corvette.dechargerTroupes(2)
print("\n--------------------")

# Appel des méthodes de l'instance X-Wing de type Intercepteur
displayFeatures(xwing)
xwing.setName("Spaceship")
xwing.setCanons(10)
xwing.setCanons(3)
print("\n🔥 Actions du vaisseau", xwing.getName())
xwing.tirer()
xwing.tirer()
xwing.tirer()
xwing.tirer()
xwing.recharger()
xwing.recharger()
xwing.tirer()
xwing.recharger()
print("\n--------------------")

# Appel des méthodes de l'instance Y-Wing de type Intercepteur
displayFeatures(ywing)
print("\n🔥 Actions du vaisseau", ywing.getName())
ywing.tirer()
ywing.recharger()
print("\n--------------------")