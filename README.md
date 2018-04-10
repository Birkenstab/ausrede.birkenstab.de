# ausrede.birkenstab.de
Du willst den Abwasch nicht machen, bist aber zu faul Dir eine Ausrede zu überlegen?
[ausrede.birkenstab.de](https://ausrede.birkenstab.de) nimmt Dir diese Arbeit ab!

Überzeuge Dich noch heute und probiere den **Ausreden-Generator** unter [ausrede.birkenstab.de](https://ausrede.birkenstab.de) aus!

## Features
* Generierung von Ausreden
* Zufällig generierte Ausreden
* Ultra schnell 
* Universell einsetzbar
* Responsive design
* Kinderleichte Bedienung
* 845 einzigartige Ausreden
* Plattformunabhängig

## Docker
`docker run -p 3000:3000 birkenstab/ausrede.birkenstab.de`

Docker-Hub: [hub.docker.com/r/birkenstab/ausrede.birkenstab.de/](https://hub.docker.com/r/birkenstab/ausrede.birkenstab.de/)

## Performance
* Ultra schnelle Performance
* Durchschnittliche Generierungsdauer: < 0.5 ms
* Durchschnittliche HTTP-Antwortzeit: < 4.0 ms
* wrk benchmarking results:
    ```
    wrk -c 1 -d 30s -t 1 --latency http://localhost:3000
    Running 30s test @ http://localhost:3000
      1 threads and 1 connections
      Thread Stats   Avg      Stdev     Max   +/- Stdev
        Latency     1.98ms    6.29ms 136.36ms   97.06%
        Req/Sec     0.88k   245.13     1.16k    82.61%
      Latency Distribution
         50%    0.95ms
         75%    1.19ms
         90%    2.20ms
         99%   23.86ms
      26365 requests in 30.06s, 10.05MB read
    Requests/sec:    876.93
    Transfer/sec:    342.35KB
    
    ```

## Contribution
Du hast eine Idee für eine Ausrede bzw. Teile davon?
Dann hilf mit die Vielfalt von [ausrede.birkenstab.de](https://ausrede.birkenstab.de) noch weiter zu steigern!

Die Regeln für die Ausreden befinden sich in `lib/excuses.js`

## Roadmap
* 1000 einzigartige Ausreden erreichen
