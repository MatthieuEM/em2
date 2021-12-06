<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">

    <title>{{ config('app.name', 'EM2') }}</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet">

    <script src="{{ asset('js/app.js') }}" defer></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>

    <div id="overlay">
        <div class="first"></div>
        <div class="second"></div>
        <div class="third"></div>
    </div>

    <header class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-between align-items-center">

                    <div id="logo">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="150" height="89.25" viewBox="0 0 150 89.25">
                                <defs>
                                  <pattern id="pattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 250 149">
                                    <image width="250" height="149" xlink:href="data:image/png;base64,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"/>
                                  </pattern>
                                </defs>
                                <rect width="150" height="89.25" fill="url(#pattern)"/>
                            </svg>
                        </a>
                    </div>

                    <div id="header-options" class="d-flex justify-content-center align-items-center">
                        <a href="#" id="header-phone">
                            <svg xmlns="http://www.w3.org/2000/svg" width="43.091" height="43.098" viewBox="0 0 43.091 43.098">
                                <g id="Group_45" data-name="Group 45" transform="translate(67.272 -0.647)">
                                  <path id="Path_30" data-name="Path 30" d="M-29.6,40.648c-4.113,4.115-15.188-.292-24.737-9.843S-68.289,10.176-64.176,6.062l6-3.543a1.683,1.683,0,0,1,2.254.514l4.209,6.295a1.661,1.661,0,0,1-.434,2.288l-2.541,1.763a1.636,1.636,0,0,0-.44,2.232A54.02,54.02,0,0,0-39.108,31.625a1.63,1.63,0,0,0,2.191-.463l1.568-2.261a1.77,1.77,0,0,1,2.487-.722l6.293,4.211a1.683,1.683,0,0,1,.514,2.254Z" transform="translate(0)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
                                  <g id="Group_44" data-name="Group 44" transform="translate(-43.048 3.188)">
                                    <path id="Path_31" data-name="Path 31" d="M-31.057,3.665A16.325,16.325,0,0,1-14.733,19.991" transform="translate(31.057 -3.665)" fill="none" stroke="#fe7b62" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                                    <path id="Path_32" data-name="Path 32" d="M-31.057,13.447a9.93,9.93,0,0,1,9.934,9.928" transform="translate(31.057 -7.049)" fill="none" stroke="#fe7b62" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3"/>
                                  </g>
                                </g>
                            </svg>
                        </a>
                        <a href="#" id="header-burger" class="d-inline-flex flex-column justify-content-center align-items-center">
                            <img id="burger-top" src="{{ Storage::url('images/header/burger/top.png') }}" alt="top burger">
                            <div id="burger-stuff" class="d-flex flex-column justify-content-center align-items-center">
                                <img id="burger-tomato" src="{{ Storage::url('images/header/burger/tomato.png') }}" alt="tomato burger">
                                <img id="burger-meat" src="{{ Storage::url('images/header/burger/meat.png') }}" alt="meat burger">
                                <img id="burger-salad" src="{{ Storage::url('images/header/burger/salad.png') }}" alt="salad burger">
                            </div>
                            <img id="burger-bottom" src="{{ Storage::url('images/header/burger/bottom.png') }}" alt="bottom burger">
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </header>

    <section id="content" class="container-fluid text-center">
        <div class="row justify-content-center align-items-center h-100">
            <div class="col-12">
                <h1>
                    em<sup>2</sup> vous souhaite la bienvenue!
                </h1>
                <h2>
                    Pourquoi êtes-vous ici aujourd'hui?
                </h2>
                <div id="funnel-questions" class="d-flex justify-content-between align-items-center">
                    <div class="button-container-2">
                        <span class="mas">Voir l'offre de services</span>
                      <button type="button" name="Hover">Voir l'offre de services</button>
                    </div>
                    <div class="button-container-2">
                        <span class="mas">Découvrir l'expertise</span>
                      <button type="button" name="Hover">Découvrir l'expertise</button>
                    </div>
                    <div class="button-container-2">
                        <span class="mas">Collaborer avec notre équipe</span>
                      <button type="button" name="Hover">Collaborer avec notre équipe</button>
                    </div>
                </div>
                <div id="bullets" class="d-flex justify-content-center align-items-center">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div class="line"></div>
                </div>
            </div>
        </div>
    </section>

</body>
</html>