# 13. Выдать купюры в банкомате

1. Реализовать функцию getMoney для банкомата, выдающего купюры.
На вход - сумма, на выходе объект с количеством купюр по каждому номиналу. 
При этом банкомат должен выдать минимальное количество банкнот.
Доступные номиналы: 50, 100, 500, 1000, 5000 р

Пример: getMoney(6200) // return {5000: 1, 1000: 1, 500: 0, 100: 2, 50: 0}

2. На вход добавляется объект с текущим количеством купюр в банкомате

Пример: getMoney(6200, {5000:0, 1000:7, 100:5}) // return {5000: 0, 1000: 6, 100: 2}
P.S. не забыть модифицировать объект с номиналами.