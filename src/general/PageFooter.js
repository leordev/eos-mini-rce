import React, { Component } from 'react'
import { Container, Icon, Content, Columns, Column, Footer } from 'bloomer'

class PageFooter extends Component {
  render() {
    return (<Footer className="has-margin-top">
        <Container>
            <Content>
                <Columns>
                    <Column isFull>
                        <p>
                            Made with<Icon hasTextColor="danger" className="fa fa-heart"></Icon>
                            by <a href="https://leordev.github.io/" target="_blank">Leo Ribeiro</a>
                        </p>
                    </Column>
                </Columns>
                <Content isSize='small'>
                    <p>The source code is licensed under <a target="_blank" href="https://opensource.org/licenses/MIT">MIT</a>.</p>
                </Content>
            </Content>
        </Container>
    </Footer>)
  }
}

export default PageFooter
