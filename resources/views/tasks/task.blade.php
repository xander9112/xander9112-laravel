@extends('layouts.app')

@section('content')

    <!-- Bootstrap шаблон... -->
    <div class="well">
        <!-- Отображение ошибок проверки ввода -->
    @include('common.errors')

    {{--{{dump($task)}};--}}

    <!-- Форма новой задачи -->
        {{-- <form action="/tasks/{{ $task->id }}" method="POST" class="form-horizontal">
             {{ csrf_field() }}
             {{ method_field('PUT') }}
             <input type="hidden" value="{{$task->id}}"/>
             <!-- Имя задачи -->
             <div class="form-group">
                 <label for="task" class="col-sm-3 control-label">Задача</label>

                 <div class="col-sm-6">
                     <input type="text" name="name" id="task-name" class="form-control" value="{{$task->name}}">
                 </div>
             </div>

             <div class="form-group">
                 <label for="task-description" class="col-sm-3 control-label">Описание задачи</label>

                 <div class="col-sm-6">
                     <textarea class="form-control" id="task-description" name="description"
                               rows="3">{{$task->description}}</textarea>
                 </div>
             </div>
             <div class="form-group">
                 <div class="col-sm-offset-3 col-sm-6">



                     <div class="checkbox">
                         <label>
                             <input type="checkbox" name="completed" checked="{{$task->completed}}"> Завершена
                         </label>
                     </div>
                 </div>
             </div>
             <!-- Кнопка добавления задачи -->
             <div class="form-group">
                 <div class="col-sm-offset-3 col-sm-6">
                     <button type="submit" class="btn btn-default">
                         <i class="fa fa-plus"></i> Обновить задачу
                     </button>
                 </div>
             </div>
         </form>--}}
        {{ Form::open(array('url' => 'tasks/' . $task->id, 'method' => 'put', 'class' => 'form-horizontal')) }}

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
