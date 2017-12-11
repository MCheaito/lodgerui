<?php

class Service {

    public $entity;
    public $result;

    public function __construct(){
        $this->result = new Result('Result',null);
    }
    public function Get($id) : Result
    {
        return $this->result;
    }
    public function Put($param)  : Result
    {
        return $this->result;
    }
    
    public function Create($param)  : Result
    {
        return $this->result;
    }

    public function Delete($id)  : Result
    {
        return $this->result;
    }
}

class Result{
    public $content;
    public  $error;
    public function __construct($content,$error){
        $this->content =$content;
        $this->error =$error;
    }
}

?>