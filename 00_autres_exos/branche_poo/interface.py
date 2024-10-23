# Manipuler le compte
operations = [100, 2000, 5000, -100, -1000, 0, -300]

# Création de l'interface ICompte
class ICompte: 
    def deposer(montant):
        pass
    def retirer(montant):
        pass
    def getBalance(self):
        pass

# Création de la classe parent Compte
class Compte(ICompte): 
    def __init__(self, balance, montant = 0):
        self.balance = balance
        self.montant = montant

    def deposer(self, montant):
        self.balance += montant
        print(f"Solde disponible après dépôt (+{montant}€) : {self.balance}€")
        return self.balance
    
    def retirer(self, montant):
        self.balance += montant # Attention : il faut ajouter le signe - avant chaque opération
        print(f"Solde disponible après retrait ({montant}€) : {self.balance}€")
        return self.balance
    
    def getBalance(self):
        print(f"Solde disponible : {self.balance}€")
        return self.balance

# Création de la classe enfant CompteEnLigne 
class CompteEnLigne(Compte): 
    def __init__(self, balance, montant = 0):
        super().__init__(balance, montant)
    
    def manipulateBalance(self, liste):
        for i in liste:
            if i > 0:
                self.deposer(i)
            elif i < 0:
                self.retirer(i)
            else: 
                print("Aucune opération n'a été effectuée")

# Création de la classe enfant Epargne 
class Epargne(Compte):
    def __init__(self, balance, montant = 0):
        super().__init__(balance, montant)

    def deposer(self, montant):
        if montant >= 200:
            self.balance += montant
            print(f"Solde disponible après dépôt (+{montant}€) : {self.balance}€")
        else: 
            print(f"Votre dépôt doit être supérieur à 200€")
        return self.balance
    
    def retirer(self, montant):
        if self.balance >= 1000:
            self.balance += montant
            print(f"Solde disponible après retrait ({montant}€) : {self.balance}€")
        else: 
            print(f"Votre solde doit être supérieur à 1000€")
        return self.balance
    
    
# Instanciation de classe
monCompte = CompteEnLigne(0)
monEpargne = Epargne(200)

# Appel des méthodes
print("🤑 MON COMPTE EN LIGNE 🤑")
monCompte.deposer(100)
monCompte.retirer(-20)
monCompte.manipulateBalance(operations)
monCompte.getBalance()
print()

print("💸 MON ÉPARGNE 💸")
monEpargne.getBalance()
monEpargne.deposer(200)
monEpargne.deposer(100)
monEpargne.deposer(199)
monEpargne.deposer(250)
monEpargne.retirer(-100)
monEpargne.deposer(1000)
monEpargne.retirer(-200)
print()


