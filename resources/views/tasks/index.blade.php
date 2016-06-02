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
        <form action="/task" method="POST" class="form-horizontal">
        {{ csrf_field() }}

        <!-- Имя задачи -->
            <div class="form-group">
                <label for="task" class="col-sm-3 control-label">Задача</label>

                <div class="col-sm-6">
                    <input type="text" name="name" id="task-name" class="form-control">
                </div>
            </div>

            <div class="form-group">
                <label for="task-description" class="col-sm-3 control-label">Описание задачи</label>

                <div class="col-sm-6">
                    <textarea class="form-control" id="task-description" name="description" rows="3"></textarea>
                </div>
            </div>

            <!-- Кнопка добавления задачи -->
            <div class="form-group">
                <div class="col-sm-offset-3 col-sm-6">
                    <button type="submit" class="btn btn-default">
                        <i class="fa fa-plus"></i> Добавить задачу
                    </button>
                </div>
            </div>
        </form>
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
                                    <form action="/task/{{ $task->id }}" method="POST">
                                        {{ csrf_field() }}
                                        {{ method_field('DELETE') }}

                                        <a href="{{url('/tasks/'.$task->id)}}" class="btn btn-default">
                                            <i class="fa fa-edit"></i>
                                        </a>
                                        <button class="btn btn-default"><i class="fa fa-remove"></i></button>
                                    </form>
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
