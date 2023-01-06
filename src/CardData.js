const arr = [
    {
        title: `A Netflix Series`,
        name: `The Conjuring`,
        pic: `https://occ-0-2367-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdESmGiTmMGqA0WTekuAMHlj2B9GCZV0KwlAb7X0Tsenxn61JRNvbGGsavexFFC4TP13sIYcwLvMWUomuqV9ZabTsEYZxbdkw0I.webp?r=4dc`,
        link: `https://www.netflix.com/watch/81238605?trackId=253628477&tctx=1%2C5%2C6e77332a-e9d1-44ac-a0d0-9c7b75705a23-19312242%2CNES_A663981F0B175E43AAC6F27503D736-5550185BF39555-0ED9178272_p_1672995115363%2CNES_A663981F0B175E43AAC6F27503D736_p_1672995115363%2C%2C%2C%2C%2CVideo%3A81238605`
    }

    ,
    {
        title: `A Netflix Series`,
        name: `The Witcher`,
        pic: `https://occ-0-2367-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd-FUrJRupM-QUPXq3tjq0mUNKR3OtJs-na2eHjcRsxmZfglXllt75PoW8Sr3CXn9xgoaw-pajSdMc5I7St1wMsjP9Qfpln8BvMsJ4h_VujSx_kn3-7UfmI4YGEUxzyrivqj.jpg?r=297`,
        link: `https://www.netflix.com/watch/81246470?trackId=256718606&tctx=3%2C0%2C6e77332a-e9d1-44ac-a0d0-9c7b75705a23-19312242%2CNES_A663981F0B175E43AAC6F27503D736-96F184AFCD19F6-0ED9178272_p_1672995115363%2CNES_A663981F0B175E43AAC6F27503D736_p_1672995115363%2C%2C%2C%2C%2CVideo%3A80189685`
    }
    ,
    {
        title: `A Netflix Series`,
        name: `The Curse`,
        pic: `https://occ-0-2367-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS1U2o4uu339BmarjtKMQTWJePtWJV7M1T2UZZ5WR_6a5nyAaDDN9GX_4uLT4TNDX8HoJEXRq0tUqzkcULYY-d_KCKWt4nsvRU8.webp?r=ea9`,
        link: `https://www.netflix.com/watch/81551871?trackId=14201255&tctx=2%2C3%2C6e77332a-e9d1-44ac-a0d0-9c7b75705a23-19300822%2CNES_0FAA21ACD46B75DAC1562354F8E3EA-08EE772FAC38DC-F31211A12A_p_1672995096851%2CNES_0FAA21ACD46B75DAC1562354F8E3EA_p_1672995096851%2C%2C%2C%2C%2CVideo%3A81551869`
    }
    ,
    {
        title: `A Netflix Series`,
        name: `The Glory`,
        pic: `https://occ-0-2367-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWqMlhZpJg6RCmNyDHdX3NHUjtS0BIyTPsYraW-gZFTJeYyVe0y11WV1HRCbuyQ5qjbCj-vPTdtumsiY6Tu3YiUh2KOWdohCaayFFGsbbELivpFR7pikSCN8MBRFxO7PPKrpY_V38mahO967N1LujQfShGjZp2TF0sm9gmx6oXSO2zBra2_cuZY0_qpQ8s0.jpg?r=2fe`,
        link: `https://www.netflix.com/watch/81562874?trackId=253628477&tctx=1%2C1%2C6e77332a-e9d1-44ac-a0d0-9c7b75705a23-19312242%2CNES_A663981F0B175E43AAC6F27503D736-5550185BF39555-0ED9178272_p_1672995115363%2CNES_A663981F0B175E43AAC6F27503D736_p_1672995115363%2C%2C%2C%2C%2CVideo%3A81519223`
    }
    ,
    {
        title: `A Netflix Series`,
        name: `The Pale Blue Eye`,
        pic: `https://occ-0-2367-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQCUL26acjFmh-X2YjZabNGKmrgJgnD3PdrZ4-oH4aEaabXj11uRWggbbBN2HJrECM_dE5FPQ002R-jmaYk9ixbKgxFQwcJVj41qtb2D_7ojEAiyEnXrmZ3QxiEI7FZ7s43t.jpg?r=d0e`,
        link: `https://www.netflix.com/watch/81444818?trackId=253628477&tctx=1%2C2%2C6e77332a-e9d1-44ac-a0d0-9c7b75705a23-19312242%2CNES_A663981F0B175E43AAC6F27503D736-5550185BF39555-0ED9178272_p_1672995115363%2CNES_A663981F0B175E43AAC6F27503D736_p_1672995115363%2C%2C%2C%2C%2CVideo%3A81444818`
    }
    ,
    {
        title: `A Netflix Series`,
        name: `The Witcher Blood Origin`,
        pic: `https://occ-0-2367-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdzINyreJdkugxINk4sVyXNUmXkrNLUL4OGr8MjXlWleQGWVxst_Kj-UnRyWhiR9W2vT_7njXpXTiK3fhOpA8irw20er5kwvvhxZ1UzV5BZ-mZFpr4X-VNw_GwLeUier9650.jpg?r=c1e`,
        link: `https://www.netflix.com/watch/81323603?trackId=253628477&tctx=1%2C4%2C6e77332a-e9d1-44ac-a0d0-9c7b75705a23-19312242%2CNES_A663981F0B175E43AAC6F27503D736-5550185BF39555-0ED9178272_p_1672995115363%2CNES_A663981F0B175E43AAC6F27503D736_p_1672995115363%2C%2C%2C%2C%2CVideo%3A81279312`
    }
  ]
  export default arr; 