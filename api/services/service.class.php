<?php

class Service {

    public $entity;

    protected function __construct(){
        $this->entity ='From ddddservices';
    }

    public function Get($id)
    {
        return $this->entity;
    }


}

?>