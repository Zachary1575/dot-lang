# dot-lang
A pseudo-morse code compiler implemented in Javascript.

# Dictonary/Syntax Table
A psuedo-morse code programming language. Please don't ask why.

International Standard Table ~ (IS)
<br>
Custom Created Table ~ (CC)

## Character/Letters (IS)

| Letter/Char   |     Morse     |        Sound          |
| ------------- |:-------------:|:---------------------:|
| "A"           | .-            |  (di-dah)             |
| "B"           | -...          |  (dah-di-di-dit)      |
| "C"           | -.-.          |  (dah-di-dah-dit)     |
| "D"           | -..           |  (dah-di-dit)         |
| "E"           | .             |  (dit)                |
| "F"           | ..-.          |  (di-di-dah-dit)      |
| "G"           | --.           |  (dah-dah-dit)        |
| "H"           | ....          |  (di-di-di-dit)       |
| "I"           | ..            |  (di-dit)             |
| "J"           | .---          |  (di-dah-dah-dah)     |
| "K"           | -.-           |  (dah-di-dah)         |
| "L"           | .-..          |  (di-dah-di-dit)      |
| "M"           | --            |  (dah-dah)            |
| "N"           | -.            |  (dah-dit)            |
| "O"           | ---           |  (dah-dah-dah)        |
| "P"           | .--.          |  (di-dah-dah-dit)     |
| "Q"           | --.-          |  (dah-dah-di-dah)     |
| "R"           | .-.           |  (di-dah-dit)         |
| "S"           | ...           |  (di-di-dit)          |
| "T"           | -             |  (dah)                |
| "U"           | ..-           |  (di-di-dah)          |
| "V"           | ...-          |  (di-di-di-dah)       |
| "W"           | .--           |  (di-dah-dah)         |
| "X"           | -..-          |  (dah-di-di-dah)      |
| "Y"           | -.--          |  (dah-di-dah-dah)     |
| "Z"           | --..          |  (dah-dah-di-dit)     |

## Digits/Numbers (IS)
| Digit/Number   |      Morse     |         Sound         |
| -------------- |:--------------:|:---------------------:|
|    1           | .----          |  (di-dah-dah-dah-dah) |
|    2           | ..---          |  (di-di-dah-dah-dah). |
|    3           | ...--          |  (di-di-di-dah-dah)   |
|    4           | ....-          |  (di-di-di-di-dah)    |
|    5           | .....          |  (di-di-di-di-dit)    |
|    6           | -....          |  (dah-di-di-di-dit)   |
|    7           | --...          |  (dah-dah-di-di-dit)  |
|    8           | ---..          |  (dah-dah-dah-di-dit) |
|    9           | ----.          |  (dah-dah-dah-dah-dit)|
|    0           | -----          |  (dah-dah-dah-dah-dah)|

## Arithmetic (IS)
| Operation      |      Morse     |         Sound         |
| -------------- |:--------------:|:---------------------:|
|    +           | .-.-.          |  (di-dah-di-dah-dit)  |
|    -           | -....-         |  (dah-di-di-di-di-dah)|
|    *           | -..-           |  (dah-di-di-dah)      |
|    /           | -..-.          |  (dah-di-di-dah-dit)  |

## Other syntax (CC and IS)
|  Operation      |      Morse     |            Sound         |
| --------------- |:--------------:|:------------------------:|
|    =            | -...-          |  (dah-di-di-di-dah)      |
|    (            | -.--.          |  (dah-di-dah-dah-dit)    |
|    )            | -.--.-         |  (dah-di-dah-dah-di-dah) |
|    ==           | -...--...-     |  (dah-di-di-di-dah-dah-di-di-di-dah)  |

# Ignorables
Commonly, it may be painful to look at morse code and have no idea what you are writing. Some users may complain that it is hard to debug and write programs due to the lengthy and monotomous syntax. However, our philosophy demands us to maintain our language to be purely 100% morse code.

A compromise is to introduce ignorables. Ignorables are ASCII characters that are ignored during compilation, but can be added to
assist in some readability.

For Example:
```
...- .- .-. -...- .---- // VAR = 1

..-- .--. ...- .- .-. -...--...- .---- -.--.- .-.-.. // if (var == 1) {
    .-.-.-. ..---    // return 1
-.-..               // }

Output:
>> .----  // 1
```

```
<...- .- .-.> -...- |.----| // VAR = 1

..-- .--.( <...- .- .-.> -...--...- |.----| )-.--.- {.-.-.. // if (var == 1)
    >> ..---    // return 1
-.-..}

Output:
>> .----  // 1
```

## Examples
Adding two numbers:
```
.---- .-.-. .----   // 1 + 1

>> ..---            // 2
```
Conditionals:
```
<...- .- .-.> -...- .---- // VAR = 1

if .--. ...- .- .-. -...--...- .---- -.--.- { // if (var == 1)
    return ..---    // return 1
}

>> .----  // 1
```
