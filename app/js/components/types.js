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
            <img height="50%" width="50%" src='../images/recurrent.png'></img>

             <h3> Recurrent Neural Network</h3>

             <p>A recurrent neural network, or RNN, is essentially the same as a feed forward network, <br></br>
                but is able to have neurons draw data from <i>themselves</i> in previous iterations. <br></br>
                Therefore, the order of data in the input later has an effect on the output. Therefore,<br></br>
                RNNs are useful only for non-time-dependent datasets. 

                <br></br><br></br>

                Generally, RNNs are applicable in completing or advancing current information, such as autocomplete in <br></br>
                texting applications. 
             </p>

          </div>

          <div>

            <img height="30%" width="30%" src='../images/autoencoders.png'></img>
            <h3> Autoencoders </h3>


             <p>Autoencoders are similar to feed forward neural networks in that information is only<br></br>
                passed forward from the input layer to the ouput layer; however, autoencoders have <br></br>
                fewer middle input layers than the output or input layers. Therefore, the structure<br></br>
                resembles an hourglass. Data is encoded from the input layer to the hidden layers, which<br></br>
                contain the code, and decoded to the output layers.

                <br></br><br></br>

                Autoencoders are very useful for natural language processing, or NLP. They are also used in data<br></br>
                compression algorithms and for pretraining other, more complicated, neural networks. 
             </p>

          </div>
      </div>
    );
  }
}


export default Types;