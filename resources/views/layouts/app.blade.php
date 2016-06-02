<!DOCTYPE html>
{{$app->setLocale('ru')}}

<html lang="{{$app->getLocale()}}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}" />

    <title>Обычный таск манагер</title>


    <link rel="stylesheet" type="text/css" href="{{ asset('assets/css/bootstrap.css') }}"/>
    <script type="text/javascript" src="{{ asset('assets/js/jquery-2.2.4.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('assets/js/bootstrap.js') }}"></script>
    <!-- Fonts -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css" rel='stylesheet'
          type='text/css'>

    {{-- <link href="{{ elixir('css/app.css') }}" rel="stylesheet"> --}}
</head>
<body id="app-layout">
<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="{{ url('/') }}">ТаскМанагер</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li><a href="/tasks">Задачи</a></li>
            </ul>
            <div id="navbar" class="navbar-collapse collapse">
                @if (Auth::check())
                    <div class="navbar-right">
                        <a href="{{url('/auth/logout')}}" class="btn btn-default navbar-btn">Выйти</a>
                    </div>
                @else
                    <form class="navbar-form navbar-right js-login" method="POST" action="{{ url('/auth/login') }}"
                          data-auth="{!!Auth::check()!!}">
                        {!! csrf_field() !!}
                        <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                            <input type="email" class="form-control" name="email" value="{{ old('email') }}">

                            @if ($errors->has('email'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                        </div>

                        <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                            <input type="password" class="form-control" name="password">

                            @if ($errors->has('password'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif
                        </div>
                        <button type="submit" class="btn btn-success">Войти</button>
                        <button type="button" class="btn btn-primary" data-toggle="modal"
                                data-target="#registrationModal">
                            Регистрация
                        </button>
                    </form>
                @endif

            </div><!--/.navbar-collapse -->
        </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
</nav>
<div class="container-fluid">
    <div class="row">
        <div class="col-xs-12">
            @yield('content')
        </div>
    </div>
</div>

<div class="modal fade" id="registrationModal" tabindex="-1" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                            aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Регистрация</h4>
            </div>
            <div class="modal-body">
                @include('partials.register')
            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div><!-- /.modal -->
<!-- JavaScripts -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
{{-- <script src="{{ elixir('js/app.js') }}"></script> --}}


{{--<script type="text/javascript">
    @if (count($errors->register->all()))
        $('#registrationModal').modal('show');
    @endif
</script>--}}
<script type="text/javascript" src="{{ asset('assets/js/script.js') }}"></script>
</body>
</html>
