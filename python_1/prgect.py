import random
agever = input('Enter your age: ')
if int(agever) < 18:
    print('You are too young to play this game')
    quit()
credits = 100
number_of_plays = 0
symbles = ['🍒','🍟','🍕','🤓']
print('This is a gambling game you have 100 credits to use on a bad slot machine')
result = random.choice(symbles)

