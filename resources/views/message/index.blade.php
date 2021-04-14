@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-4">
            <h4 class="m-2">Online Users</h4>
            <ul class="list-group" id="online-users">

            </ul>
        </div>
        <div class="col-8">
            @php
                
            @endphp
                <div class="chat" >

                @foreach ($Messages as $Message)
                    <div class="message @if ($Message->senderID == Auth::user()->id)  send  : 'receive' @endif">
                        <p >{{$Message->body ?? ''}}</p>
                    </div>
                    <div class="claer"> </div>
                    <br>
                @endforeach

                <div class="ajaxMessage">

                </div>
                

                </div>
                <div class="row aa" style="justify-content: center;">
                    <form action="{{ url('message') }}" method="post" id="sendMessage">
                        <input type="hidden" name="senderID" value="{{ Auth::user()->id }}">
                        <input type="text" class=" form-control" name="body">
                        <button class=" btn btn-primary ml-2" id="send">Send</button>
                    </form>
                </div>


        </div>
    </div>
    
    
</div>
@endsection