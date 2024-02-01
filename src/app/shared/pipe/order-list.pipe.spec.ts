import { OrderListPipe } from './order-list.pipe';
import * as mockRaw from '../../data/tracks.json'
import { TracksModel } from '@core/models/tracks.model';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('Probando entrada y salida de valores', () => {
    //TODO Arrange
    const pipe = new OrderListPipe();
    const { data } : any = (mockRaw as any).default;

    //TODO Act
    const result: TracksModel[] = pipe.transform(data);

    //TODO Assert
    expect(result).toEqual(data)

  });

  it('Probar si se ordena de manera correcta ASC', () => {
    //TODO Arrange
    const pipe = new OrderListPipe();
    const { data } : any = (mockRaw as any).default;
    const firstValue = data.find( (i: any) => i._id === 7 );
    const lastValue = data.find((i: any) => i._id === 6 );

    //TODO Act
    const result: TracksModel[] = pipe.transform(data, 'name', 'asc');
    const firstResult = result[0]; 
    const lastResult = result[result.length - 1];

    //TODO Assert
    expect(firstResult).toEqual(firstValue);
    expect(lastResult).toEqual(lastValue);

  });
});
