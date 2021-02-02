<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>laravel vue SPA</title>
</head>
<body>
    <div id="app">
        <h1>@{{ title }}</h1>
        <header-component></header-component>
        <router-view></router-view>
        <footer-component></footer-component>
    </div>

<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
