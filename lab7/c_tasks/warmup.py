#  def spleep_in(weekday, vacation):
#     if not weekday or vacation:
#         return True
#     else:
#         return False
    


# def monkey_trouble(a_smile, b_smile):
#   if a_smile and b_smile:
#     return True
#   if not a_smile and not b_smile:
#     return True
#   return False


# a = int(input())
# b = int(input())


# def sum_double(a,b):
#     sum = a + b
#     if a == b:
#         sum = sum * 2
#     return sum
# print(sum_double(a,b))


# n = int(input())
# def diff(n):
#     if n<=21:
#         return 21 - n
#     else:
#         return(n-21)*2

# print(diff(n))

# talking = bool(input())
# hour = int(input())
# def parrot_trouble(talking, hour):
#     return(talking and (hour < 7 or hour < 20))

# print(parrot_trouble(talking, hour))

# a = int(input())
# b = int(input())
# def makes10(a,b):
#     if a==10 or b == 10 or a+b == 10:
#         return(True)
#     else:
#         return(False)
# print(makes10)



# def near_hundred(n):
#     if abs(100 - n) <= 10 or abs(200 - n) <= 10:
#         return True
#     else:
#         return False


# n = int(input())
# print(near_hundred(n))

# def pos_neg(a, b, neg):
#     if neg:
#         return a < 0 and b < 0
#     else:
#         return (a < 0 and b > 0) or (a > 0 and b < 0)


# a = int(input())
# b = int(input())
# neg = input() == "True"

# print(pos_neg(a, b, neg))


# def not_string(str):
#     if len(str) >= 3 and str[:3] == "not":
#         return str
#     return "not" + ' ' + str 

# str = input()
# print(not_string(str))



# def missing_char(str, n):
#    front = str[:n] 
#    back = str[n+1:]
#    return front + back

# str = input()
# n = int(input())
# print(missing_char(str, n))


# def front_back(str):
#     if len(str) <= 1:
#         return str
#     return str[-1] + str[1:-1] + str[0]

# str = input()
# print(front_back(str))



# def front(str):
#     if len(str) == 3:
#         return str * 3
#     return str[:3] * 3

# str = input()
# print(front(str))