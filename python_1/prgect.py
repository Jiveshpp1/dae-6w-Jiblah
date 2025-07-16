import random
agever = input('Enter your age: ')
if int(agever) < 17:
    print('You are too young to play this game')
    quit()
elif int(agever) > 121:
    print('You are faking your age to play this game')
    quit()
elif int(agever) == 17:
    print('no')
    print('Your ID still screams “nice try".')
    quit()
else:        
    print('Welcome to the game')
    credits = 100
    number_of_plays = 0
    symbles = ['🍒','🍟','🍕','🤓','💎','💵']
    creditswon = 0
    print('This is a gambling game you have ' + str(credits) + ' credits to use on a bad slot machine')
    bet = input('how much do you wnat to bet 5 or 20 or 10 credits? ')
    #Function to use slot machine It cheaks if the user has enough credits to play 
    def play(): 
        global credits, number_of_plays, bet , creditswon

        if bet not in ['1','5', '10','20']:
            print('You can only bet 1 or 10 or 20 credits')
            quit()
        if credits <= 0:
            print('You have no credits left to play')
            print('You played ' + str(number_of_plays) + ' times')
            print('You won ' + str(creditswon) + ' credits')
            quit()      
        oof =[random.choice(symbles),random.choice(symbles),random.choice(symbles)]
        oofu = [random.choice(symbles),random.choice(symbles),random.choice(symbles)]
        oofd = [random.choice(symbles),random.choice(symbles),random.choice(symbles)]
        print('|'.join(oofu))
        print('|'.join(oof))
        print('|'.join(oofd))
        if oof[0] == oof[1] == oof[2] == oofu[0] == oofu[1] == oofu[2] == oofd[0] == oofd[1] == oofd[2]== '💎':
            print('You won le thgy!')
            credits += 100000*int(bet)
            number_of_plays += 1
            print('You now have ' + str(credits) + ' credits')
            print('__________________')
            creditswon += 100000*int(bet)
        elif oof[0] == oof[1] == oof[2]:
            print('You won!')
            credits += 3*int(bet)
            number_of_plays += 1
            creditswon += 3*int(bet)
            print('You now have ' + str(credits) + ' credits')
            print('__________________')
        elif oofu[0] == oofu[1] == oofu[2]:
            print('You won!')
            credits += 3*int(bet)
            number_of_plays += 1
            print('You now have ' + str(credits) + ' credits')
            print('__________________')
            creditswon += 3*int(bet)
        elif oofd[0] == oofd[1] == oofd[2]:
            print('You won!')
            credits += 3*int(bet)
            number_of_plays += 1
            print('You now have ' + str(credits) + ' credits')
            print('__________________')
            creditswon += 3*int(bet)
        
        else: 
            print('You lost!')
            credits -= int(bet)
            number_of_plays += 1 
            print('You now have ' + str(credits) + ' credits')
    play()
    
    while True:

        again = input("Do you want to play? (yes/y/no/n): ").lower()
        
        if again == "yes" or again == "y":
            play()
        elif again == "no" or again == "n":
            print("Thanks for playing!")
            break
        else:
            print("Please enter yes or no.")
    

               

                  
            
    
    
