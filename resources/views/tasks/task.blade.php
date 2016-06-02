@extends('layouts.app')

@section('content')

    <div class="well">
        <!-- Отображение ошибок проверки ввода -->
        @include('common.errors')

        {{ Form::open(array('url' => 'tasks/' . $task->id, 'method' => 'put', 'class' => 'form-horizontal js-update-task')) }}

        <div class="form-group">
            {{ Form::label('name', 'Название:',array('class' => 'col-sm-3 control-label')) }}
            <div class="col-sm-6">
                {{ Form::text('name', $task->name, array('class' => 'form-control')) }}
            </div>
        </div>
        <div class="form-group">
            {{ Form::label('description', 'Описание:',array('class' => 'col-sm-3 control-label')) }}
            <div class="col-sm-6">
                {{ Form::textArea('description', $task->description, array('class' => 'form-control')) }}
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-3 col-sm-6">
                <div class="checkbox">
                    <label>
                        {{Form::checkbox('completed', 1, $task->completed)}} Завершена
                    </label>
                </div>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-3 col-sm-6">
                {{Form::button('<i class="fa fa-plus"></i> Обновить задачу', array('class' => 'btn btn-default', 'type' => 'submit'))}}
            </div>
        </div>

        {{ Form::close() }}

    </div>
@endsection
