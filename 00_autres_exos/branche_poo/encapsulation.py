class Voiture:
    # Constructeur de la classe
    def __init__(self, im):
        self.__Compteur = 0
        self.__Immat = im
        
    # Définition des accesseurs en lecture et écriture
    def getCompteur(self):
        return self.__Compteur
    def setCompteur(self, km):
        self.__Compteur = km
    def getImmat(self):
        return self.__Immat
    def setImmat(self,im):
        self.__Immat = im

    # Autres méthodes de classe
    def ChangerPneu(self):
        return (self.__Compteur >= 10000) 
    
    def ChoixRouler(self):
        d = int(input("Distance : "))
        if not self.ChangerPneu() :
            self.setCompteur(self.getCompteur() + d ) 
        else :
            print("Vos pneus sont usés !")

    def Choix_Afficher(self):
        print("\nImmatriculation: ", self.getImmat()) 
        print("Kilometrage: ", self.getCompteur(), "km") 
    

maVoiture = Voiture("KZ 360 RR")

maVoiture.setImmat("KZ 360 RR")
maVoiture.setCompteur(26000)
maVoiture.ChoixRouler()
maVoiture.Choix_Afficher()
