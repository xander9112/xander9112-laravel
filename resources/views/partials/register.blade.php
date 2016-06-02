<form class="form-horizontal" role="form" method="POST" action="{{ url('/auth/register') }}">
    {!! csrf_field() !!}

    <div class="form-group{{ $errors->register->has('name') ? ' has-error' : '' }}">
        <label class="col-md-4 control-label">Имя</label>

        <div class="col-md-6">
            <input type="text" class="form-control" name="name" value="{{ old('name') }}">

            @if ($errors->register->has('name'))
                <span class="help-block">
                    <strong>{{ $errors->register->first('name') }}</strong>
                </span>
            @endif
        </div>
    </div>

    <div class="form-group{{ $errors->register->has('email') ? ' has-error' : '' }}">
        <label class="col-md-4 control-label">E-Mail адресс</label>

        <div class="col-md-6">
            <input type="email" class="form-control" name="email" value="{{ old('email') }}">

            @if ($errors->register->has('email'))
                <span class="help-block">
                    <strong>{{ $errors->register->first('email') }}</strong>
                </span>
            @endif
        </div>
    </div>

    <div class="form-group{{ $errors->register->has('password') ? ' has-error' : '' }}">
        <label class="col-md-4 control-label">Пароль</label>

        <div class="col-md-6">
            <input type="password" class="form-control" name="password">

            @if ($errors->register->has('password'))
                <span class="help-block">
                    <strong>{{ $errors->register->first('password') }}</strong>
                </span>
            @endif
        </div>
    </div>

    <div class="form-group{{ $errors->register->has('password_confirmation') ? ' has-error' : '' }}">
        <label class="col-md-4 control-label">Подтверждение пароля</label>

        <div class="col-md-6">
            <input type="password" class="form-control" name="password_confirmation">

            @if ($errors->register->has('password_confirmation'))
                <span class="help-block">
                    <strong>{{ $errors->register->first('password_confirmation') }}</strong>
                </span>
            @endif
        </div>
    </div>

    <div class="form-group">
        <div class="col-md-6 col-md-offset-4">
            <button type="submit" class="btn btn-primary">
                <i class="fa fa-btn fa-user"></i> Зарегистрироваться
            </button>
        </div>
    </div>
</form>
