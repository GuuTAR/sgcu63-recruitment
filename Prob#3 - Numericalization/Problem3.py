
one = ["    1",
       "    1",
       "    1",
       "    1",
       "    1"]

zero = ["00000",
        "0   0",
        "0   0",
        "0   0",
        "00000"]

two = ["22222",
       "    2",
       "22222",
       "2    ",
       "22222"]

three = ["33333",
         "    3",
         "33333",
         "    3",
         "33333"]

four = ["4   4",
        "4   4",
        "44444",
        "    4",
        "    4"]

five = ["55555",
        "5    ",
        "55555",
        "    5",
        "55555"]

six = ["66666",
       "6    ",
       "66666",
       "6   6",
       "66666"]

seven = ["77777",
         "    7",
         "    7",
         "    7",
         "    7"]

eight = ["88888",
         "8   8",
         "88888",
         "8   8",
         "88888"]

nine = ["99999",
        "9   9",
        "99999",
        "    9",
        "99999"]

N,M1,M2 = [int(e) for e in input().split()]

def expand(num, M1, M2) :
    result = []
    for i in range(5) :
        newLine = str()
        for j in range(5) :
            newLine += num[i][j]*M2
        for k in range(M1) :
            result.append(newLine)
    return result

new0 = expand(zero, M1, M2)
new1 = expand(one, M1, M2)
new2 = expand(two, M1, M2)
new3 = expand(three, M1, M2)
new4 = expand(four, M1, M2)
new5 = expand(five, M1, M2)
new6 = expand(six, M1, M2)
new7 = expand(seven, M1, M2)
new8 = expand(eight, M1, M2)
new9 = expand(nine, M1, M2)

def chooseNum(num) :
    global new0, new1, new2, new3, new4, new5, new6, new7, new8, new9
    if (num == '0') :
        return new0
    if (num == "1") :
        return new1
    if (num == "2") :
        return new2
    if (num == "3") :
        return new3
    if (num == "4") :
        return new4
    if (num == "5") :
        return new5
    if (num == "6") :
        return new6
    if (num == "7") :
        return new7
    if (num == "8") :
        return new8
    if (num == "9") :
        return new9
     
numberList = [e for e in str(N)]

for i in range(5*M1) :
    for j in range(len(numberList)) :
        print(end=" "*M2)
        numPrinting = chooseNum(numberList[j])
        for k in range(5*M2) :
            print(numPrinting[i][k], end = "")
    print()
