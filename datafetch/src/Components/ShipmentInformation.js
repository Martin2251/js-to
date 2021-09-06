import {Button, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class ShipmentInformation extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          isEdit: false,
          name: this.props.shipment.name
      }
  }
  // info from what we want to display 
  render() {
    const {
        id,
        origin,
        destination,
        mode,
        cargo,
        type,
        services,
        total,
        status,
        userId
    } = this.props.shipment;
    return (
        <div className='details-container'>
            <Link to='/'>
                <Button variant="primary" className='back-button'> Back</Button>
            </Link>

            <Card>
                <Card.Header><h3> {id}: {this.state.name}</h3></Card.Header>
                <Card.Body>
                    <Card.Title><b>Overview:</b></Card.Title>
                    <div className='overview-content'>
                        <Card.Text className="mb-2 text-muted overview-title">Name</Card.Text>
                        <Card.Text>{this.state.isEdit ? this.generateInput() : this.generateValue()}</Card.Text>
                    </div>
                    <div className='overview-content '>
                        <Card.Text className="mb-2 text-muted overview-title">user Id</Card.Text>
                        <Card.Text>{userId}</Card.Text>
                    </div >
                    <div className='overview-content '>
                        <Card.Text className="mb-2 text-muted overview-title">Origin</Card.Text>
                        <Card.Text>{origin}</Card.Text>
                    </div>
                    <div className='overview-content '>
                        <Card.Text className="mb-2 text-muted overview-title">Destination</Card.Text>
                        <Card.Text>{destination}</Card.Text>
                    </div>
                    <div className='overview-content '>
                        <Card.Text className="mb-2 text-muted overview-title">Mode</Card.Text>
                        <Card.Text>{mode}</Card.Text>
                    </div>
                    <div className='overview-content '>
                        <Card.Text className="mb-2 text-muted overview-title">Type</Card.Text>
                        <Card.Text>{type}</Card.Text>
                    </div>
                    <div className='overview-content '>
                        <Card.Text className="mb-2 text-muted overview-title">Status</Card.Text>
                        <Card.Text>{status}</Card.Text>
                    </div>
                    <div className='overview-content '>
                        <Card.Text className="mb-2 text-muted overview-title">total</Card.Text>
                        <Card.Text>{total}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
               
            <Card>
                <Card.Body>
                    <Card.Title><b>Services:</b></Card.Title>
                        {services ? services.map((s, index) => (
                                <div key={index} >
                                    <div className='service-container'>
                                        <Card.Text className='service-title'>Type</Card.Text>
                                        <Card.Text>{s.type}</Card.Text>
                                    </div>
                                    <div className='service-container'>
                                        <Card.Text className='service-title'>Value</Card.Text>
                                        <Card.Text>{s.value || 'N/A'}</Card.Text>
                                    </div>
                                </div>
                                
                        )): ''}
                    </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                <Card.Title><b>Cargo:</b></Card.Title>
                        {cargo ? cargo.map((s, index) => (
                                <div key={index}>
                                    <div className='service-container'>
                                        <Card.Text className='service-title'>Type</Card.Text>
                                        <Card.Text>{s.type}</Card.Text>
                                    </div>
                                    <div className='service-container'>
                                        <Card.Text className='service-title'>Description</Card.Text>
                                        <Card.Text>{s.description || 'N/A'}</Card.Text>
                                    </div>
                                    <div className='service-container'>
                                        <Card.Text className='service-title'>Volume</Card.Text>
                                        <Card.Text>{s.volume || 'N/A'}</Card.Text>
                                    </div>
                                </div>