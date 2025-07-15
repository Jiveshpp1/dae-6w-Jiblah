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
    print('This is a gambling game you have ' + str(credits) + ' credits to use on a bad slot machine')
    bet = input('how much do you wnat to bet 5 or 20 or 10 credits? ')
    def play(): 
        global credits, number_of_plays, bet

        if bet not in ['1','5', '10','20']:
            print('You can only bet 1 or 10 credits')
            play()
            return
        if credits <= 0:
            print('You have no credits left to play')
            print('You played ' + str(number_of_plays) + ' times')
            quit()      
        oof =[random.choice(symbles),random.choice(symbles),random.choice(symbles)]
        print('|'.join(oof))
        if oof[0] == oof[1] == oof[2] =='💎':
            print('You won le thgy!')
            credits += 100*int(bet)
            number_of_plays += 1
            print('You now have ' + str(credits) + ' credits')
        elif oof[0] == oof[1] == oof[2]:
            print('You won!')
            credits += 2*int(bet)
            number_of_plays += 1
            print('You now have ' + str(credits) + ' credits')
        else: 
            print('You lost!')
            credits -= int(bet)
            number_of_plays += 1 
            print('You now have ' + str(credits) + ' credits')
    play()
    while True:
        play()
        if credits <= 0:
            print('You have no credits left to play')
            print('You played ' + str(number_of_plays) + ' times')
            quit()
        else:
            again = input('Do you want to play again? (yes/y/no/n): ')
            if again != 'yes' :
                print('Thanks for playing!')
                quit()
       
    

               

                  
            
    
    
