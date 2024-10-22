# Définition de la classe parent
class Vaisseau:
    # Constructeur
    def __init__(self, name, type, size):
        self.name = name
        self.type = type
        self.size = size

    def getFeatures(self):
        print("Nom :", self.name)
        print("Type :", self.type)
        print("Taille :", self.size, "mètres")
        return (self.name, self.type, self.size)

# Création d'une classe enfant
class Croiseur(Vaisseau): 
    def __init__(self, name, type, size, capacity, loading = 0):
        super().__init__(name, type, size)
        self.capacity = capacity
        self.loading = loading

    def getCapacity(self):
        print("Capacité :", self.capacity, "hommes")
        print("Chargement :", self.loading, "hommes")
        return (self.capacity, self.loading)

    def chargerTroupes(self, new_loading):
        if (self.loading + new_loading <= self.capacity):
            self.loading += new_loading
            print("Nouveau chargement (+", new_loading, "hommes) :", self.loading, "hommes")
        else: 
            print("Nouveau chargement (+", new_loading, "hommes) : ❌ Dépassement de la capacité maximale")
        return self.loading

    def dechargerTroupes(self, new_loading):
        self.loading -= new_loading
        print("Nouveau chargement (-", new_loading, "hommes) :", self.loading, "hommes")

# Création d'une classe enfant
class Intercepteur(Vaisseau): 
    def __init__(self, name, type, size, nb_canon):
        super().__init__(name, type, size)
        self.nb_canon = nb_canon
    
    def getCanons(self):
        print("Nombre de canons :", self.nb_canon)
        return (self.nb_canon)

    def tirer(self):
        print("Action : Tire !")
        if self.nb_canon > 0:
            self.nb_canon -= 1
            print("Tirs restants :", self.nb_canon)
        else: 
            print(f"Vous n'avez plus de canons ! Rechargez votre {self.name}.")

    def recharger(self):
        print("Action : Recharge")
        if (self.nb_canon < 2):
            self.nb_canon = 2
            print("Tirs restants :", self.nb_canon)
        else: 
            print(f"Votre {self.name} est déjà chargé.")

# Instanciation de classe
acclamator = Croiseur("Acclamator", "Croiseur", 752, 700)
corvette = Croiseur("Corvette corellienne CR90", "Croiseur", 150, 165)
xwing = Intercepteur("X-wing", "Intercepteur", 12.5, 2)
ywing = Intercepteur("Y-wing", "Intercepteur", 23, 2)

# Appel des méthodes de l'instance Acclamator de type Croiseur
acclamator.getFeatures()
acclamator.getCapacity()
acclamator.chargerTroupes(600)
acclamator.chargerTroupes(20)
acclamator.chargerTroupes(100)
acclamator.dechargerTroupes(10)
print()

# Appel des méthodes de l'instance Corvette de type Croiseur
corvette.getFeatures()
corvette.getCapacity()
corvette.chargerTroupes(15)
corvette.dechargerTroupes(2)
print()

# Appel des méthodes de l'instance X-Wing de type Intercepteur
xwing.getFeatures()
xwing.getCanons()
xwing.tirer()
xwing.tirer()
xwing.tirer()
xwing.tirer()
xwing.recharger()
xwing.recharger()
xwing.tirer()
xwing.recharger()
print()

# Appel des méthodes de l'instance Y-Wing de type Intercepteur
ywing.getFeatures()
ywing.getCanons()
ywing.tirer()
ywing.recharger()
print()

# Fonction qui prend un vaisseau en paramètre et affiche ses capacités
def displayFeatures(vaisseau):
    print("🚀 Afficher les caractéristiques du vaisseau")
    if (isinstance(vaisseau, Vaisseau)):
        vaisseau.getFeatures()
        if (isinstance(vaisseau, Croiseur)):
            vaisseau.getCapacity()
            print()
        elif (isinstance(vaisseau, Intercepteur)):
            vaisseau.getCanons()
            print()

displayFeatures(corvette)
displayFeatures(xwing)
