<?php

class Authenticate{

    //token config
    public $username = "";
    public $password = "";
    public $isValid= false;

    // constructor with $db as database connection
    public function __construct($user,$password){
        $this->username = $user;
        $this->password = $password;
        $this->isValid =  $this->validate();
    }

    // create new token
    public function validate()
    {
        return  ($this->username ==="cheaito" && $this->password ==="123");
    }
}
?>