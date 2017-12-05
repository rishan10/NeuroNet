import React, { Component } from 'react';


class Types extends Component {
    //TODO
    //For each type...
    //1. Brief description of structure
    //2. Brief description of applications
    //3. Image
   render() {
    //Notes...
    //nice resource: http://www.asimovinstitute.org/neural-network-zoo/
    //images are stored in /dist/images folder
    return (
     <div>
        <div>

            <img height="50%" width="50%" src='../images/feedforward.png'></img>
            <h3> Feed Forward Network </h3>
            <p>A feed forward neural network is a network in which data is passed from the input layer, <br></br>
                through hidden layers, and finally to the output layer. A feed forward network does not have <br></br>
                cycles, meaning data is always <i>fed forward</i>. The learning happens though back propagation, with <br></br>
                pairs of input/output data is fed into the network; this is called <i>supervised learning.</i>  

                <br></br> <br></br> 

                Applications for feed forward networks are mainly classification tasks, such as classifying handwriting.
           


            </p>
          </div>

           <div>

            <img height="50%" width="50%" src='../images/convolutional.png'></img>
            <h3> Convolutional Network</h3>


            <p>The structure of a convolutional neural network begins with a <i>scanning layer</i><br></br>
                which represents a portion of an image. The data is then fed to convolutional layers, in which<br></br>
                the nodes are only connected to nearby nodes. There are also pooling layers, which filter out<br></br>
                specific details in images (pooling together pixels with the most amount of red, etc.).
              

            <br></br> <br></br> 


            Application for CNNs are mainly in image processing: recognizing on-screen patterns to play video <br></br>
                games, finding cars in complicated images, and even learning how to cook from watching YouTube videos. 





             </p>
          </div>

          <div>
             <h3> Recurrent Neural Network</h3>
          </div>

          <div>
             <h3> Autoencoders </h3>
          </div>
      </div>
    );
  }
}


export default Types;