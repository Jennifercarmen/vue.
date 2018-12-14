<template>
 <b-container>
   
    <b-row>
        <div cols="12">
          <div class="panel panel-default">
            <div class="panel-body">
              <div class="content-heading">BUSCAR PERSONAS</div>
              <br>
              <div class="form-group">
    
    
                <label col lg="1" md="2" sm="12">Documento</label>
                <div col lg="2" md="4" sm="12">
                  <div>
                    <input class="form-control ng-dirty ng-valid ng-touched" name="document" id="document" type="text" autofocus="" minlength="8"
                      maxlength="8">
                  </div>
                  <!---->
                </div>
    
    
    
              </div>
       <b-row>
        <b-col>
              <b-button variant="primary">BUSCAR</b-button>
        </b-col>
        <b-col>
            <b-button variant="success">LIMPIAR CAMPO</b-button>
        </b-col>
       
    </b-row>

    
    
              <div class="form-group">
                <div class="col-sm-12">
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th class="text-center" style="color: black; font-size: medium">
                            <strong>Documento</strong>
                          </th>
                          <th class="text-center" style="color: black; font-size: medium">
                            <strong>Nombres</strong>
                          </th>
                          <th class="text-center" style="color: black; font-size: medium">
                            <strong>Ap. Paterno</strong>
                          </th>
                          <th class="text-center" style="color: black; font-size: medium">
                            <strong>Ap. Materno</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <!---->
                        <tr id="tbody">
    
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </b-row>
    </b-container>
</template>

<script>
  import axios from 'axios'
  export default {
    mounted () {
        axios
          .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.log(error)
          })
      }
  }
</script>