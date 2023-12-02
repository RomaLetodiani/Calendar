import { Button, Flex } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

type Props = {
  month: string;
  year: number;
  onPrevious: () => void;
  onNext: () => void;
};

const Header = ({ month, year, onPrevious, onNext }: Props) => {
  return (
    <Flex justify="space-between" align="middle" gap={8}>
      <Button type="text" onClick={onPrevious}>
        <LeftOutlined />
      </Button>
      <h1>
        {month} {year}
      </h1>
      <Button type="text" onClick={onNext}>
        <RightOutlined />
      </Button>
    </Flex>
  );
};

export default Header;
