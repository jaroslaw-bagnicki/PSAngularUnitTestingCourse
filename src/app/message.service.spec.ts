import { MessageService } from './message.service';

describe('message service', () => {
  // let service: MessageService;

  // beforeEach(() => {
  //   service = new MessageService();
  // });

  const setup = () => ({
    service: new MessageService(),
  });

  it('should have NOT messages at start', () => {
    const { service } = setup();

    const result = service.messages.length;

    expect(result).toBe(0);
  });

  it('method add should add new message', () => {
    const { service } = setup();

    service.add('test message');

    expect(service.messages.length).toBe(1);
  });

  it('method clear should remove all messages', () => {
    const { service } = setup();
    service.add('message1');
    service.add('message2');
    expect(service.messages.length).toBe(2);

    service.clear();

    expect(service.messages.length).toBe(0);
  });

});
