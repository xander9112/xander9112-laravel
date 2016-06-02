@extends('layouts.app')

@section('content')

    @if (session('status'))
        <div class="alert alert-success">
            {{ session('status') }}
        </div>
    @endif

    <!-- Bootstrap шаблон... -->
    <div class="well">
        <!-- Отображение ошибок проверки ввода -->
    @include('common.errors')

    <!-- Форма новой задачи -->
        {{ Form::open(array('url' => 'tasks/', 'method' => 'post', 'class' => 'form-horizontal')) }}

        <div class="form-group">
            {{ Form::label('name', 'Название:',array('class' => 'col-sm-3 control-label')) }}
            <div class="col-sm-6">
                {{ Form::text('name', '', array('class' => 'form-control')) }}
            </div>
        </div>
        <div class="form-group">
            {{ Form::label('description', 'Описание:',array('class' => 'col-sm-3 control-label')) }}
            <div class="col-sm-6">
                {{ Form::textArea('description', '', array('class' => 'form-control')) }}
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-3 col-sm-6">
                {{Form::button('<i class="fa fa-plus"></i> Добавить задачу', array('class' => 'btn btn-default', 'type' => 'submit'))}}
            </div>
        </div>
        {{ Form::close() }}
    </div>

    <!-- Текущие задачи -->
    @if (count($tasks) > 0)
        <table id="todos" class="table table-bordered">
            <tbody id="todo-list">
            @foreach ($tasks as $key => $task)
                <tr class="{{$task->completed ? 'bg-success' : ''}}">
                    <td>
                        <div>
                            <div class="panel-heading clearfix">
                                <h3 class="panel-title pull-left">{{ $task->name }}</h3>
                                <div class="pull-right">
                                    {{ Form::open(array('url' => 'tasks/'. $task->id, 'method' => 'DELETE')) }}
                                    <a href="{{url('/tasks/'.$task->id)}}" class="btn btn-default">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                    <button class="btn btn-default"><i class="fa fa-remove"></i></button>
                                    {{ Form::close() }}
                                </div>
                            </div>
                            <div class="panel-body">
                                {{$task->description}}
                            </div>
                        </div>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
    @endif
@endsection
