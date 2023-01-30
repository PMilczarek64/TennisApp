import React from "react";
import styled from "styled-components";
import HeaderBar from "../common/HeaderBar";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const CardsWrapper = styled.div`
  max-width: 100%;
  padding: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media (max-width: 450px) {
    padding-inline: 0;
  }
`;

const Card = styled.div`
  width: 330px;
  max-height: 60vh;
  display: flex;
  flex-direction: column;
  position: relative;
  border: solid 1px;
  border: none;
  margin: 20px;
  align-items: stretch;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
  box-shadow: 0px 2px 14px -4px rgba(66, 68, 90, 1);
  h4 {
    color: ${({ theme }) => theme.colors.detailBlue};
    margin: 5px 0 5px 0;
    font-size: 22px;
    position: relative;
    top: 0;
  }
  p {
    padding-inline: 10px;
  }
  @media (max-width: 450px) {
    margin-inline: 10px;
    width: 100vw;
    max-height: 95vh;
  }
  @media (max-height: 830px) {
    max-height: 85vh;
    width: 390px;
  }
`;

const Image = styled.div`
  height: 60%;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const CityBar = styled.div`
margin: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 25px;
  color: white;
  text-align: center;
  z-index: 3;
  background-color: #4169E1;
  top: 9%;
  transform: rotate(45deg);
  right: -13%;
`;

const CardContent = styled.div`
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    margin-top: 7px;
  }
`;

const LowBar = styled.div`
  display: flex;
  bottom: 0;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: white;
  background-color: ${({ theme }) => theme.colors.strongFaded};
  margin-top: 15px;
  gap: 1px;
`;

const LowBarItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 65px;
  color: ${({ theme }) => theme.colors.detailBlue};
  background-color: ${({ theme }) => theme.colors.detailGreen};
  h4 {
    margin: 0;
    font-weight: 700;
    color: green;
    color: ${({ theme }) => theme.colors.detailBlue};
  }
  p {
    font-weight: 700;
    font-size: 12px;
    color: green;
  }
`;

const FindAPartner = () => {
  return (
    <Wrapper>
      <HeaderBar value="Find a partner"></HeaderBar>
      <CardsWrapper>
        <Card>
          <Image>
            <img src="https://images.pexels.com/photos/1772724/pexels-photo-1772724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <CityBar>Kraków</CityBar>
          </Image>
          <CardContent>
            <h4>Barbara</h4>
            <p>
              I work in corpo on a daily basis, I am looking for a training
              partner
            </p>
            <LowBar>
              <LowBarItem>
                <h4>4.5</h4>
                <p>NTRP</p>
              </LowBarItem>
              <LowBarItem>
                <h4>28</h4>
                <p>Age</p>
              </LowBarItem>
              <LowBarItem>
                <h4>1.72m</h4>
                <p>Height</p>
              </LowBarItem>
            </LowBar>
          </CardContent>
        </Card>
        <Card>
          <Image>
            <img src="https://images.pexels.com/photos/1103828/pexels-photo-1103828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <CityBar>Władysławowo</CityBar>
          </Image>
          <CardContent>
            <h4>Mark</h4>
            <p>
              I study physical education, I love effort and I am looking for
              challenges
            </p>
            <LowBar>
              <LowBarItem>
                <h4>4.0</h4>
                <p>NTRP</p>
              </LowBarItem>
              <LowBarItem>
                <h4>26</h4>
                <p>Age</p>
              </LowBarItem>
              <LowBarItem>
                <h4>1.79m</h4>
                <p>Height</p>
              </LowBarItem>
            </LowBar>
          </CardContent>
        </Card>
        <Card>
          <Image>
            <img src="https://images.pexels.com/photos/12189140/pexels-photo-12189140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <CityBar>Bielsko-Biała</CityBar>
          </Image>
          <CardContent>
            <h4>Michonne</h4>
            <p>
              I am looking for someone to train with a similar level of NTRP
            </p>
            <LowBar>
              <LowBarItem>
                <h4>5.0</h4>
                <p>NTRP</p>
              </LowBarItem>
              <LowBarItem>
                <h4>30</h4>
                <p>Age</p>
              </LowBarItem>
              <LowBarItem>
                <h4>1.79m</h4>
                <p>Height</p>
              </LowBarItem>
            </LowBar>
          </CardContent>
        </Card>
        <Card>
          <Image>
            <img src="https://images.pexels.com/photos/5409085/pexels-photo-5409085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <CityBar>Dąbrowa górnicza</CityBar>
          </Image>
          <CardContent>
            <h4>Alexa</h4>
            <p>
              I'm a tennis freak, I'm looking for people who don't like rest too
              much. Evening hours only ;)
            </p>
            <LowBar>
              <LowBarItem>
                <h4>3.5</h4>
                <p>NTRP</p>
              </LowBarItem>
              <LowBarItem>
                <h4>17</h4>
                <p>Age</p>
              </LowBarItem>
              <LowBarItem>
                <h4>1.70m</h4>
                <p>Height</p>
              </LowBarItem>
            </LowBar>
          </CardContent>
        </Card>
        <Card>
          <Image>
            <img src="https://images.pexels.com/photos/5739221/pexels-photo-5739221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <CityBar>Katowice</CityBar>
          </Image>
          <CardContent>
            <h4>Stan</h4>
            <p>
              I am a lover of the 70s. I am looking for someone to go to tennis
              classes with
            </p>
            <LowBar>
              <LowBarItem>
                <h4>2.0</h4>
                <p>NTRP</p>
              </LowBarItem>
              <LowBarItem>
                <h4>33</h4>
                <p>Age</p>
              </LowBarItem>
              <LowBarItem>
                <h4>1.81m</h4>
                <p>Height</p>
              </LowBarItem>
            </LowBar>
          </CardContent>
        </Card>
        <Card>
          <Image>
            <img src="https://images.pexels.com/photos/6292760/pexels-photo-6292760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <CityBar>Gdynia</CityBar>
          </Image>
          <CardContent>
            <h4>Jeremiah</h4>
            <p>
              I am an experienced tennis amateur, looking for people of similar
              age to play
            </p>
            <LowBar>
              <LowBarItem>
                <h4>3.0</h4>
                <p>NTRP</p>
              </LowBarItem>
              <LowBarItem>
                <h4>72</h4>
                <p>Age</p>
              </LowBarItem>
              <LowBarItem>
                <h4>1.76m</h4>
                <p>Height</p>
              </LowBarItem>
            </LowBar>
          </CardContent>
        </Card>
        <Card>
          <Image>
            <img src="https://images.pexels.com/photos/5837026/pexels-photo-5837026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <CityBar>Los Angeles</CityBar>
          </Image>
          <CardContent>
            <h4>Jacob</h4>
            <p>
              I especially like to play on clay courts. If you are too - call
              me! I am available all week ;)
            </p>
            <LowBar>
              <LowBarItem>
                <h4>4.0</h4>
                <p>NTRP</p>
              </LowBarItem>
              <LowBarItem>
                <h4>28</h4>
                <p>Age</p>
              </LowBarItem>
              <LowBarItem>
                <h4>1.82m</h4>
                <p>Height</p>
              </LowBarItem>
            </LowBar>
          </CardContent>
        </Card>
        <Card>
          <Image>
            <img src="https://images.pexels.com/photos/10145713/pexels-photo-10145713.jpeg?auto=compress&cs=tinysrgb&w=600"></img>
            <CityBar>Miami</CityBar>
          </Image>
          <CardContent>
            <h4>Barbara</h4>
            <p>
              I'm left-handed and like a one-handed backhand. I want to prepare
              for amateur competitions
            </p>
            <LowBar>
              <LowBarItem>
                <h4>3.5</h4>
                <p>NTRP</p>
              </LowBarItem>
              <LowBarItem>
                <h4>34</h4>
                <p>Age</p>
              </LowBarItem>
              <LowBarItem>
                <h4>1.75m</h4>
                <p>Height</p>
              </LowBarItem>
            </LowBar>
          </CardContent>
        </Card>
      </CardsWrapper>
    </Wrapper>
  );
};

export default FindAPartner;
